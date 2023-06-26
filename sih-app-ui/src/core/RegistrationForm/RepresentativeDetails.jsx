import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from "../../assets/img/signUp.jpg";
import Navbar from "../../components/Navbar";
import Logo from "../../assets/img/logo_malacca.jpg"


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function CertificateValidation() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Representative's Name"
                name="name"
                type="name"
                autoComplete="name"
                autoFocus 
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Position in the Company"
                name="name"
                type="name"
                autoComplete="name"
                autoFocus 
              />
               <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Organisation Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus 
              />
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Representative's Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus 
              />
               <TextField
                margin="normal"
                required
                fullWidth
                id="number"
                label="Representative's Contact Number"
                name="number"
                type="number"
                autoComplete="number"
                autoFocus 
              />
            </Box>
            
    
  );
}
