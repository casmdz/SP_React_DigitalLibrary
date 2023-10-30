import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Container, Typography } from "@mui/material";
import LoginForm from './forms/LoginForm';


export default function LoginPage() {

  return (
    <>
    <Container component="main" maxWidth="xs" sx={{ marginBottom: 8 }}>
      {/* 
      <Grid container sx={{ height: '100vh', width: '80vw', display: 'flex', justifyContent: "center" }} component={Paper} elevation={6} square></Grid>
       */}
      <Box sx={{ marginTop:4, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >

        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>
        <Typography variant="h5">Sign in</Typography>

        <LoginForm />


      </Box>
    </Container>
    </>
  )
}