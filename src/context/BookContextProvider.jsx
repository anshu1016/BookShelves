import { createContext, useContext, useReducer } from "react";
import { BookReducer, initialState } from "../reducer/BookReducer";

const BookContext = createContext();

export default function BookContextProvider({ children }) {
  const [state, dispatch] = useReducer(BookReducer, initialState);
  console.log(state, "state2");
  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}
const useBookEvent = () => useContext(BookContext);
export { BookContextProvider, useBookEvent };
