import Books from "../data/Books";
const initialState = {
  allBooks: Books,
  currently_reading: Books.filter(
    (book) => book.status === "currently_reading"
  ),
  want_to_read: Books.filter((book) => book.status === "want_to_read"),
  read: Books.filter((book) => book.status === "read")
};
export default function BookReducer(state, { type, payload }) {
  console.log(state, "state");
  switch (type) {
    case "curently_reading": {
      const updateTheBook = state.allBooks.map((book) =>
        book.id === payload.id ? { ...book, status: "currently_reading" } : book
      );
      return {
        ...state,
        allBooks: updateTheBook,
        currently_reading: updateTheBook.filter(
          (book) => book.status === "currently_reading"
        ),
        want_to_read: updateTheBook.filter(
          (book) => book.status === "want_to_read"
        ),
        read: updateTheBook.filter((book) => book.status === "read")
      };
    }
    case "want_to_read": {
      const updateTheBook = state.allBooks.map((book) =>
        book.id === payload.id ? { ...book, status: "want_to_read" } : book
      );
      return {
        ...state,
        allBooks: updateTheBook,
        currently_reading: updateTheBook.filter(
          (book) => book.status === "currently_reading"
        ),
        want_to_read: updateTheBook.filter(
          (book) => book.status === "want_to_read"
        ),
        read: updateTheBook.filter((book) => book.status === "read")
      };
    }
    case "read": {
      const updateTheBook = state.allBooks.map((book) =>
        book.id === payload.id ? { ...book, status: "read" } : book
      );
      return {
        ...state,
        allBooks: updateTheBook,
        currently_reading: updateTheBook.filter(
          (book) => book.status === "currently_reading"
        ),
        want_to_read: updateTheBook.filter(
          (book) => book.status === "want_to_read"
        ),
        read: updateTheBook.filter((book) => book.status === "read")
      };
    }
    case "none": {
      return { ...state };
    }
    default:
      return { state };
  }
}
export { BookReducer, initialState };
