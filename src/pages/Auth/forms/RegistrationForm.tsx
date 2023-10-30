import { Alert, Backdrop, Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { u_server_calls } from "../../../auth/server";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// https://www.npmjs.com/package/yup#typescript-integration

const validationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  username: yup.string().required().min(3).max(25, "Username cannot exceed 25 characters"),
  password: yup.string().required(),
  confirm_password: yup.string().required().oneOf([yup.ref("password")], "Passwords dont match >:("),
  email: yup.string().email("Invalid email format").required("Email is required!!"),
});

const inputStyle = {
  gap: '1em',
};


const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [, setOpenBackdrop] = useState(false);

  // const handleClose = () => {
  //   setOpenBackdrop(false);
  // };

  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await u_server_calls.post('register', data);
      console.log("User created", data);
      alert("User created! Save your information somewhere safe!\n" + JSON.stringify(data, null, 4));
      return response
    } catch (error) {
      setError('An error occurred while submitting the form');
      console.log("error creating user form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
    <form onSubmit={handleSubmit(onSubmit)}>

    <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <Controller
              control={control}
              name="first_name"
              defaultValue="" 
              render={({ field }) => (
                <TextField
                  label="First Name"
                  variant="outlined"
                  required
                  fullWidth
                  {...field}
                  style={inputStyle}
                />
              )}
            />
            {errors.first_name && <span>{errors.first_name.message}</span>}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller 
              control={control} 
              name="last_name" 
              defaultValue="" 
              render={({ field }) => (
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth 
                  required 
                  {...field}
                  style={inputStyle}
                />
              )}
            />
            {errors.last_name && <span>{errors.last_name.message}</span>}
          </Grid>

          <Grid item xs={12}>
            <Controller 
              control={control} 
              name="username" 
              defaultValue="" 
              render={({ field }) => (
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  required
                  {...field}
                  style={inputStyle}
                />
              )}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </Grid>

          <Grid item xs={12}>
            <Controller 
              control={control} 
              name="email" 
              defaultValue="" 
              render={({ field }) => (
                <TextField
                  label="Email"
                  variant="outlined"
                  required
                  fullWidth
                  {...field}
                  style={inputStyle}
                />
              )}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </Grid>

          <Grid item xs={12} >
            <Controller 
              control={control} 
              name="password" 
              defaultValue="" 
              render={({ field }) => (
                <TextField
                  label="Password" 
                  type="password" 
                  variant="outlined" 
                  required 
                  fullWidth 
                  {...field} 
                  style={inputStyle}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              defaultValue="" 
              name="confirm_password"
              render={({ field }) => (
                <TextField
                  label="Confirm Password" 
                  type="password" 
                  variant="outlined" 
                  required 
                  fullWidth 
                  {...field} 
                  style={inputStyle} 
                />
              )}
            />
            {errors.confirm_password && (
              <span>{errors.confirm_password.message}</span>
            )}
          </Grid>

          {/* <button>Submit</button> */}
          <Grid item xs={12}>
            <Button type="submit" disabled={loading} variant="contained" fullWidth sx={{ mt: 3, mb: 2, }}>Sign Up</Button>
          </Grid>

          <Grid item xs={12}>
            <Button>Hello world</Button>
        </Grid>

          <Grid item>
              Already have an account? <a href="/login">Go to Login Page</a>
          </Grid>

    </Grid>
      </form>

      {error && (
        <Alert severity="error" onClose={() => {}}>{error}</Alert>
      )}

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    </Box>
  );
};

export default RegistrationForm;
