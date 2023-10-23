import { Box, Button, Container, Stack, Typography, Grid, FormControl, FormLabel } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
// import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

import '../../components/book.css'
import UserBooksUI from './UserBooksUI';
import BookModal from './components/BookModal';
import { useEffect, useState } from 'react';
// import { server_calls } from '../../api/server';
// import { Book } from './hooks/booktype'
import { useGetBooks } from './hooks/FetchData';





export default function BookshelfPage() {

  const { bookData, getData } = useGetBooks()
  useEffect(() => {
    console.log("bookData:", bookData); 
    bookData.forEach((b) => {
      console.log("Book ID:", b.id); 
    });
  }, [bookData]); // Log when bookData changes

  // const [value, setValue] = useState('bookID');
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue((event.target as HTMLInputElement).value);
  // };

  const [ selectedBookId, setSelectedBookId ] = useState<string | null>(null);

  const [ isModalOpen, setModalOpen ] = useState(false);
  const [formType, setFormType] = useState<"add" | "update" | "delete" | null>(null);

  const handleOpenModal = (type: "add" | "update" | "delete", bookId?: string) => {
    console.log('Opening modal with type:', type);
    if (type === "add") {
      setModalOpen(true);
      setFormType(type);
    } else if (type === "update") {
      setModalOpen(true);
      setFormType(type);
      setSelectedBookId(bookId || null); 
    } else {
      setModalOpen(true);
      setFormType(type);
    }
  }


  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedBookId(null); 
  }

//   const getData = async () => {
//     const result = await server_calls.get();
//     console.log(result)
// }
  
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
        <Button variant='contained' color='info' onClick={() => handleOpenModal("update")}>
          Update a book
        </Button>
        {/* <Button variant='contained' color='warning' onClick={getData}>Get Data</Button> */}
      </Stack>
    </Box>


    <Box id="book-list" className=' py-2 m-2' sx={{ flexGrow: 1 }}>
      <div className=' p-1 mb-1 text-center'>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">This book</FormLabel>
            <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" 
            name="bookSelection" 
            value={value} 
            onChange={handleChange}
            > */}
        { bookData.length === 0 ? (
        Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className=' flex justify-center flex-row '>
            <Skeleton variant="rounded" width={210} height={300} className=' m-12 relative md:left-32'/>
          </div>
        ))
      ) : 
      ( bookData.map((b,)=>(
        <Grid item xs={12} sm={4} md={4} className='m-1 p-8 '>
          <UserBooksUI key={b.id} book={b} onSelect={() => handleOpenModal("update", b.id)} />
          {/* <Radio value="hello" /> */}
        </Grid>
        ))
      )}

        {/* </RadioGroup>
      </FormControl> */}

      </Grid>
      </div>
    </Box>

    <BookModal open={isModalOpen} onClose={handleCloseModal} formType={formType} selectedBookId={selectedBookId}/>

  </Container>
  </>
  )
}
