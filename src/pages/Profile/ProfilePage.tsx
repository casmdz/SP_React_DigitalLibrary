import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


export default function ProfilePage() {

    const [user, setUser] = useState({
        username: '',
        email:'',
        token: ''
    });
    
    // https://github.com/casmdz/DigitalLibrary_Render/blob/233c69b782723a3186767e0925352bc81ad894bb/app/authentication/routes.py#L127 
    const getProfile = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`https://check-meowt.onrender.com/profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
            });
            if (response.ok) {
                const userData = await response.json();
                setUser(userData)
            } else {
                // if user is not authenticated
                console.log('something went super wrong')
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProfile();
      }, []);



  return (
    <Container>
        <Paper>
            <Typography variant="h4" gutterBottom> User profile</Typography>
            <Typography variant="h6" gutterBottom> Username: {user.username}</Typography>
            <Typography variant="h6" gutterBottom> Email: {user.email}</Typography>
            <Typography variant="h6" gutterBottom> Unique ID: {user.token}</Typography>
        </Paper>
    </Container>
  )
}
