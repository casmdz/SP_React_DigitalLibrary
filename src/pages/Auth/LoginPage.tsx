import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { useForm } from "react-hook-form"

export const login = (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(email, password);
    }, 500);
  });
};


export default function LoginPage() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    await login(data.email, data.password);
    console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    reset()
  }




  return (
    // component="main" 
    <Grid container sx={{ height: '100vh', width: '80vw', display: 'flex', justifyContent: "center" }} component={Paper} elevation={6} square>

      <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}} >

        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">Sign in</Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="white">
          
          <div className='input-field my-5 outline outline-offset-2 outline-4'>
            <label htmlFor='email'>Email or Username</label>
            <input type="email" id="email" 
            {...register("email", {required: "required",})}
            />
          </div>

          <div className='input-field my-5 border-red-700 border-4'>
            <label htmlFor='password'>Password</label>
            <input type="password" id="password"
            {...register("password", {required: "required", })
          }
            
            />
          </div>
          {errors.password && <span role="alert">ummm</span>}
          
          <div className='input-field my-5 border-4'>
            <button type="submit">SUBMIT</button>
          </div>


        </form>


      </Box>


    </Grid>
  );
}