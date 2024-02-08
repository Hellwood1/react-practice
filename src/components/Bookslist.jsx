import { FavouriteBooks } from "./FavoriteBooks";

export  const BookList = ({ books }) => {
  return (
    <ul>
     {books.map((book) => {
  return <li key={book.id}><FavouriteBooks book={book} /></li>;
})}
    </ul>
  );
};

