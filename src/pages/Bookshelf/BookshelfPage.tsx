import { Box, Button, Container, Stack, Typography, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
// import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

import '../../components/book.css'
import UserBooksUI from './UserBooksUI';
import BookModal from './components/BookModal';
import { useEffect, useState } from 'react';
import { useGetBooks } from './hooks/FetchData';
import { Book } from './hooks/booktype';



export default function BookshelfPage() {

  // const books = useSelector((state: RootState) => state.books.books);
  // console.log('bookshelf page printing "books" useSelector', books)

  const { bookData } = useGetBooks() // from fetch data
  useEffect(() => {
    console.log("bookData:", bookData); 
  }, [bookData]); // Log when bookData changes

  // const [ selectedBookId, setSelectedBookId ] = useState<number[]>([]);
  // const [ selectedBookId, setSelectedBookId ] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);

  const [ isModalOpen, setModalOpen ] = useState(false);
  const [formType, setFormType] = useState<"add" | "update" | "delete" | null>(null);

  const toggleSelectedBook = (bookId: number) => {
    setSelectedBookId(bookId);
  };

  // const handleOpenModal = (type: "add" | "update" | "delete", bookId?: string) => {
  const handleOpenModal = (type: "add" | "update" | "delete") => {
    console.log('Opening modal with type:', type);
    if (type === "add") {
      setModalOpen(true);
      setFormType(type);
    } else if (type === "update") {
      setModalOpen(true);
      setFormType(type);
      // setSelectedBookId(bookId || null); 
    } else {
      setModalOpen(true);
      setFormType(type);
    }
  }


  const handleCloseModal = () => {
    setModalOpen(false);
    // setSelectedBookId(null); 
  }


  // const [userBooksData, setUserBooksData] = useState([]);
  // // const userBooksData = async () => {
  // //   const result = await server_calls.get();
  // // }
  // const [value, setValue] = useState();



  return (
  <>
  <Container>

    <Box className='bg-stone-100 py-4 m-7'>
      <div className='container p-5 mb-1 text-center'>
        <Typography>Your Bookshelf</Typography> 
        {/* TODO dynamic render of user name */}
      </div>
    </Box>
    <hr />

    <Box className='bg-stone-100 py-4 m-7'>
      <Stack direction="row" spacing={2}>
        <Button variant='contained' color='info' onClick={() => handleOpenModal("add")}>
          Add New Book
        </Button>
        <Button variant='contained' color='info' onClick={() => {handleOpenModal("update");}}>
          Update a book
        </Button>
      </Stack>
    </Box>


    <Box id="book-list" className=' py-2 m-2' sx={{ flexGrow: 1 }}>
      <div className=' p-1 mb-1 text-center'>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      { bookData.length === 0 ? (
      Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className=' flex justify-center flex-row '>
          <Skeleton variant="rounded" width={210} height={300} className=' m-12 relative md:left-32'/>
        </div>
      ))
    ) : 
    ( bookData.map((b: Book)=>(
      <Grid item xs={12} sm={4} md={4} className='m-1 p-8 '>
        <UserBooksUI key={b.id} book={b} bookworm={b.bookworm} onSelect={toggleSelectedBook} />
        {/* <UserBooksUI key={b.id} book={b} onSelect={() => handleOpenModal("update", b.id)} /> */}
        {/* <Radio value="hello" /> */}
      </Grid>
      ))
    )}

      </Grid>
      </div>
    </Box>

    <BookModal open={isModalOpen} onClose={handleCloseModal} formType={formType} selectedBookId={selectedBookId}/>

  </Container>
  </>
  )
}
