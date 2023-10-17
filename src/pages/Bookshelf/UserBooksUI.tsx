import { Card, CardMedia, Typography } from '@mui/material';
import './book.css'

interface UserBookProps {
  imageSrc: string;
  linkUrl: string | undefined;
  title: string;
  author: string;
  published: string;
  format: string;
  isbn: string;
  genre: string[];
}


function UserBooksUI(props: UserBookProps) {
  return (
    <div>
      <Card className="book-item">
        <div className="book_image">
        <CardMedia 
        component="img" 
        alt={props.title} 
        height="200" 
        image={props.imageSrc} 
        title={props.title}
        />
        </div>

        <div>
          <Typography variant='h5' component='h2' className="book_name-detail">
            <a className="book_name" href={props.linkUrl} target="_blank">
              {props.title}
            </a>
          </Typography>
          <Typography variant='body2'></Typography>
          <Typography className="book_author">Author: {props.author}</Typography>
          <Typography className="book_pub">Published: {props.published}</Typography>
          <Typography className="book_format">Format: {props.format}</Typography>
          <Typography className="book_isbn">ISBN: {props.isbn}</Typography>
          <Typography className="book_genre">Genre: {props.genre.join(', ')}</Typography>

        </div>
      </Card>

    </div>
  )
}

export default UserBooksUI
