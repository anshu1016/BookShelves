import Books from "../../data/Books";
import "./home.css";
import BookCard from "../bookCard/BookCard";
import { useBookEvent } from "../../context/BookContextProvider";
export default function Home() {
  const { state } = useBookEvent();
  console.log(state, "try");
  return (
    <div>
      <div className="container">
        <span>
          <h3>Currently Readng</h3>
        </span>
        <div className="item">
          <div className="books">
            {state.allBooks
              .filter((book) => book.status === "currently_reading")
              .map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
          </div>
        </div>
        <span>
          <h3>Want To Read</h3>
        </span>
        <div className="item">
          <div className="books">
            {state.allBooks
              .filter((book) => book.status === "want_to_read")
              .map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
          </div>
        </div>
        <span>
          <h3>Read</h3>
        </span>
        <div className="item">
          <div className="books">
            {state.allBooks
              .filter((book) => book.status === "read")
              .map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
