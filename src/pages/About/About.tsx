import { Box, Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
// import { Paper, styled } from '@mui/material'
import TextField from '@mui/material/TextField';

import Book from '../../components/BookUI'
import bookData from './examplebooks.json'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   // flexGrow: 1,
// }));


export default function AboutPage() {

  return (
    <>
      <Container>
        <Box className='bg-stone-100 py-4 m-7'>
          <div className='container p-5 mb-1 text-center'>
            <Typography variant='h4' gutterBottom>Are you an avid reader, always on the lookout for your next literary adventure? Love cuteness and cat puns? Look no further than Check Meowt, a site for your favorite book lists.</Typography>
            <Typography variant='h6' gutterBottom><b>How It Works</b></Typography>
            <Typography variant='body1'>
              <ul className='leading-8'>
                <li>Book Discovery: Explore a vast collection of books spanning various genres. Find your next page-turner with
                  ease.</li>
                <li>Author Information: Get to know the brilliant minds behind your favorite books. Discover their works and
                  learn more about their literary journeys.</li>
                <li>Book Details: Dive deep into the world of books. Access essential information like ISBN numbers, book
                  titles, authors, and more.</li>
                <li>Reading Preferences: Filter books by format- whether it's a cozy hardcover or a convenient paperback, we've
                  got you covered.</li>
                <li>Personal Library: Create your virtual bookshelf. Keep track of books you've read, want to read, or are
                  currently reading.</li>
              </ul>
            </Typography>
          </div>

          <div className='flex justify-center pb-5'>
            <Card sx={{ width: 300 }}>
              <CardMedia component='img' image='src\assets\images\read_more--sincerely-media.jpg' />
            </Card>
          </div>
        </Box>
        <hr />

        <Box className='bg-stone-100 py-4 m-7'>
          <div className='container p-5 mb-1 text-center'>
            <div className='flex row p-2'>
              {/* sm:flex-wrap lg:flex-nowrap  */}
              <div className="col m-2">
                <Typography variant='h6'>Search and Browse Books</Typography>
                <div className="flex gap-4" >
                  <TextField placeholder="Title / Author / ISBN" variant="outlined" color='info' aria-label="Search" />
                  <Button variant="outlined" color='info'>Search</Button>
                </div>
              </div>

              <div className="col m-2">
                <div className="text-right">
                  <Typography variant='h5'>What do I read Next?</Typography>
                  <Typography>Tell us what titles or genres you've enjoyed in the past, and we'll give you surprisingly insightful recommendations.</Typography>
                </div>
              </div>
            </div>
          </div>
        </Box>

        <Box id='book-list' className='bg-stone-100 py-4 m-5' sx={{ flexGrow: 1 }}>
          <div className='container p-5 mb-1 text-center'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

              {bookData.map((book, index) => (
                <Grid item xs={12} sm={4} md={4} key={index} className='m-1 p-8'>
                  <Book {...book} />
                </Grid>
              ))}

            </Grid>
          </div>
        </Box>


      </Container>
    </>
  )
}
