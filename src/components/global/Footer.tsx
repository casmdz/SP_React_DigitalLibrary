// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Container } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Site map Copyright © Fake Cas Company'} 
      {' '}{new Date().getFullYear()}{'.'}
    </Typography>
  );
}

// TODO remove
// const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    // <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }} >
        {/* <CssBaseline /> */}

        <Box
          component="footer"
          sx={{ display: 'flex', py: 3, px: 2, 
          // mt: 'auto',
            // marginTop: 'calc(10% + 60px)',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? 
                theme.palette.grey[800]
                : 
                theme.palette.grey[200],
          }}
        >
            
          <Container maxWidth="md">
            <Typography variant="body2">
            All featured works &copy; of their respective owners.
            </Typography>
            <Copyright />
          </Container>

            <Box className='flex px-2 w-1/4'>
            <ul className='flex gap-4 flex-row justify-end'>
                <li><a href="https://github.com/casmdz" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a></li>
                <li><a href="mailto:t4mendez@gmail.com" target="_blank" rel="noopener noreferrer"><MailIcon /></a></li>
                <li><a href="https://www.linkedin.com/in/casmdz/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a></li>
            </ul>
            </Box>


        </Box>
      </Box>
    // </ThemeProvider>
  );
}