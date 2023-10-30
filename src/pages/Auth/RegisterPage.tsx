import { Box, Container, Typography } from "@mui/material";
import RegistrationForm from "./forms/RegistrationForm";

export default function RegisterPage() {
  return (
    <>
    <Container component="main" maxWidth="xs" sx={{ marginBottom: 8 }}>
      <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        
        <Typography variant="h5">Register Your new account!</Typography>

        <RegistrationForm />

      </Box>
    </Container>
    </>
  )
}
