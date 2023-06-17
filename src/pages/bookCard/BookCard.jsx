import { useBookEvent } from "../../context/BookContextProvider";
import "./bookcard.css";
export default function BookCard(props) {
  const { state, dispatch } = useBookEvent();
  return (
    <div>
      <div className="bookCard">
        <p className="title">Title:{props.book.title}</p>

        <h3>Author:{props.book.author}</h3>
        <h3>ISBN:{props.book.isbn}</h3>
        <p>status:{props.book.status}</p>
      </div>
      <div className="dropdown">
        <div className="dropBtn">Choose</div>
        <div className="dropdown-content">
          <button
            onClick={() =>
              dispatch({
                type: "currently_reading",
                payload: props.book
              })
            }
          >
            Currently Reading
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "want_to_read",
                payload: props.book
              })
            }
          >
            Want to Read
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "read",
                payload: props.book
              })
            }
          >
            Read
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "none",
                payload: props.book
              })
            }
          >
            None
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
