
import Header from './Header'
import { Alert } from "./Alert";
import { Button, LoginButton, FollowButton } from './Button'

// import { BookList } from './BooksList';
// import {FavouriteBooks} from './FavoriteBooks'





const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};



export default function App() {
  
  return (
    <>
      <Header />
      <hr/>
			<h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>

    
      <Button />
      <LoginButton />
      <FollowButton/>

    </>
  );
}


