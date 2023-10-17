import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

import '../../components/book.css'
import UserBooksUI from './UserBooksUI';
import BookModal from './components/BookModal';
import { useEffect, useState } from 'react';
import { server_calls } from '../../api/server';

export default function BookshelfPage() {

  // const { getData } = useGetData();

  const [ isModalOpen, setModalOpen ] = useState(false);
  const [formType, setFormType] = useState<"add" | "update" | "delete" | null>(null);

  const handleOpenModal = (type: "add" | "update" | "delete") => {
    console.log('Opening modal with type:', type);
    if (type === "add") {
      setModalOpen(true);
      setFormType(type);
    } else if (type === "update") {
      setModalOpen(true);
      setFormType(type);
    } else {
      setModalOpen(true);
      setFormType(type);
    }
  }


  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const getData = async () => {
    const result = await server_calls.get();
    console.log(result)
}
  
  const [userBooksData, setUserBooksData] = useState([]);
  // const userBooksData = async () => {
  //   const result = await server_calls.get();
  // }
  const [value, setValue] = useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };



  useEffect(() => {
    // Fetch user's book data from the server
    server_calls.get()
      .then((data) => {
        setUserBooksData(data);
      })
      .catch((error) => {
        console.error('ummmm:', error);
        throw error; 
      });
  }, []);


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
      {/* <Grid container spacing={2}> */}

        <Stack direction="row" spacing={2}>
          <Button variant='contained' color='info' onClick={() => handleOpenModal("add")}>
            Add New Book
          </Button>
          <Button variant='contained' color='info' onClick={() => handleOpenModal("update")}>
            Update a book
          </Button>
          <Button variant='contained' color='warning' onClick={getData}>Get Data</Button>
        </Stack>
      {/* </Grid> */}
    </Box>


    <Box id="book-list" className='bg-stone-100 py-4 m-5' sx={{ flexGrow: 1 }}>
      <div className=' p-5 mb-1 text-center'>
        
      
      <UserBooksUI 
      imageSrc={''} linkUrl={undefined} title={book.title} author={''} published={''} format={''} isbn={''} genre={[]}
      />
   


      </div>
    </Box>

    <BookModal open={isModalOpen} onClose={handleCloseModal} formType={formType}/>



  </Container>
  </>
  )
}
