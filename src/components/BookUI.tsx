// import bookdata from './data/examplebooks.json'
import { Typography } from '@mui/material';
import '../components/book.css'


interface BookProps {
    imageSrc: string;
    linkUrl: string | undefined ;
    title: string;
    author: string;
    published: string;
    format: string;
    isbn: string;
    genre: string[];
  }


export default function Book (props : BookProps ) {
  return (
    <div className="col-3 book-item">
      <div className="book_image">
        <a href={props.linkUrl} title={`Download: ${props.title}`} target="_blank">
          <img src={props.imageSrc} alt={props.title} />
        </a>
      </div>

      <div className="book_info">
        <Typography variant='h5' component='h2' className="book_name-detail">
          <a className="book_name" href={props.linkUrl} target="_blank">
          {props.title}
        </a>
        </Typography>
        
        <p className="book_author">Author: {props.author}</p>
        <p className="book_pub">Published: {props.published}</p>
        <p className="book_format">Format: {props.format}</p>
        <p className="book_isbn">ISBN: {props.isbn}</p>
        <p className="book_genre">Genre: {props.genre.join(', ')}</p>
        <a className="book_get disabled" href="#">
          Add to list
        </a>
      </div>
    </div>
  )
};

// export default Book
