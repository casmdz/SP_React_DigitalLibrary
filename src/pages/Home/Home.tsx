// import Carousel from 'react-material-ui-carousel'
import { Box, Container, Typography } from '@mui/material';
import Caro from './Carousel';

export default function HomePage() {
  return (
    <>
    <div>
        <Container className=' p-5 mb-4 text-center'>
            <Typography variant='h2' gutterBottom>Welcome to Check Meowt - Your Purr-fect Reading Companion!</Typography>
            <p>Check Meowt is your go-to digital library for discovering, reading, and exploring a world of books. 📚🐱</p>
              <p>We've put a feline twist on "Check Me Out" to bring you "Check Meowt"... place where bookworms and cat lovers unite!</p>
              <p>Happy Reading! 📖🐾</p>
        </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
            <Caro />
        </Box>
      
    <br />
    </div>
    </>
  )
}

