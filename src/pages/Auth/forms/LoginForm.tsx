import { Box, Button, Grid, TextField } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

import { Controller, useForm } from "react-hook-form";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// https://github.com/casmdz/DigitalLibrary_Render/blob/main/app/authentication/routes.py#L74

const loginSchema = yup.object().shape({
  username_or_email: yup.string().required("Please check your username or email"),
  password: yup.string().required("Password is required"),
});



const LoginForm = () => {
  
  const {  handleSubmit, control, formState: { errors } } =useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formData: any) => {
    console.log('login form ', formData);
    alert("Login attempted\n" + JSON.stringify(formData));
  };

  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid); //cuQX5i7nzKMf27YhMRw4WnuGptk2 K8yRFAys7RV6fQ0CgizF55hYit42
        // treeo K8yRFAys7RV6fQ0CgizF55hYit42 
        navigate("/test");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="username_or_email"
            defaultValue=""
            render={({ field }) => (
              <TextField
                type="username_or_email"
                label="Username or Email"
                variant="outlined"
                fullWidth
                required
                {...field}
              />
            )}
          />
          {errors.username_or_email && <span>{errors.username_or_email.message}</span>}
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field }) => (
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                required
                {...field}
              />
            )}
          />
        {<span role="alert">{errors.password?.message}</span>}
        </Grid>



        <div className="my-5">
          <Button variant="outlined" startIcon={<GoogleIcon color="success"/>} onClick={() => signInWGoogle()} disabled={authing}>
            Sign in with Google
          </Button>
        </div>

        <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>Log In</Button>
        </Grid>

      </form>
    </Box>
  );
};

export default LoginForm;
