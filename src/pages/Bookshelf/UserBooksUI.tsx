import { Card, CardMedia, Typography } from '@mui/material';
// import './book.css'
import '../../components/book.css'
import { Book } from './hooks/booktype';
import { useState } from 'react';
import { Radio } from '@mui/material';



interface UserBooksProps {
  book: Book;
  bookworm?: string | undefined;
  // onSelect: (bookId: string) => void;
  onSelect: (id:number) => void;
}


// const UserBooksUI: React.FC<{ book: Book }> = ({ book }) => {
const UserBooksUI = ({ book, onSelect, bookworm }: UserBooksProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    onSelect(book.id); // TODO Pass the book ID to the parent component
  };

  return (
    <div className="ubook-item">
    {/* <div className="ubook-item" onClick={onSelect}> */}
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
          <Typography className='book_owner' variant='caption'>In the library of: {bookworm}</Typography>
        </div>
      </Card>
      <Radio color='success' checked={isSelected} onChange={handleSelect} inputProps={{"aria-label": book.title}} />
    </div>
  )
}

export default UserBooksUI
