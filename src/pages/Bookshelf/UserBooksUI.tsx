import { Card, CardMedia, Typography } from '@mui/material';
// import './book.css'
import '../../components/book.css'
import { Book } from './hooks/booktype';


// interface UserBookProps {
//   imageSrc?: string;
//   linkUrl?: string | undefined;
//   title?: string;
//   author?: string;
//   published?: string;
//   format?: string;
//   isbn?: string;
//   genre?: string[];
// }

interface UserBooksProps {
  book: Book;
  // onSelect: (bookId: string) => void;
  onSelect: () => void;
}


// const UserBooksUI: React.FC<{ book: Book }> = ({ book }) => {
const UserBooksUI = ({ book, onSelect }: UserBooksProps) => {

  // const handleBookSelect = () => {
  //   onSelect(book.id);
  // }

  return (
    <div className="ubook-item" onClick={onSelect}>
      {/* handleBookSelect
       */}
      <Card className="book-item" 
      sx={{height: '400px', overflow: 'scroll', display: 'flex',justifyContent: 'center', flexWrap: 'wrap', alignContent: 'start', backgroundColor:"rgb(245 245 244)" }}>
        {/*  flexDirection: 'row', 
         */}

        <div className="ubook_image mt-4">
        <CardMedia component="img"
        alt={book.title} 
        image={book.imageSrc ? book.imageSrc : '/src/assets/images/book_placeholder.png'} 
        title={book.title} 
        />
        </div>

        <div className='m-2'>
          <Typography variant='h5' component='h2' className="book_name">{book.title}</Typography>
          <Typography className="book_author">Author: {book.author}</Typography>
          <Typography className="book_pub">Published: {book.publishing}</Typography>
          <Typography className="book_format">Format: {book.format}</Typography>
          <Typography className="book_isbn">ISBN: {book.isbn}</Typography>
          <Typography className="book_genre">Genre: {book.genre}</Typography>

        </div>
      </Card>

    </div>
  )
}

export default UserBooksUI
