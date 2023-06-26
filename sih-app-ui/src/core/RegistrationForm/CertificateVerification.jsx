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
            <h3>Upload a clear scanned image of the certificate for Verification</h3>
              <TextField
                margin="normal"
                required
                fullWidth
                id="file"
                label="Certificate File"
                name="file"
                type="file"
                autoComplete="file"
                autoFocus
                InputLabelProps={{ shrink: true  }} 
              />
              <br/>
              <br/>
             <Button variant="contained" color="success">
        Verify
      </Button>
            </Box>
            
    
  );
}
