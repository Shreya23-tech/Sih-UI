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

export default function BusinessDetail() {
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
                label="Business Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="certificationRegistrationNo"
                label="Certificate Registration Number"
                type="name"
                id="certificationRegistrationNo"
                autoComplete="certificationRegistrationNo"
              />
               <TextField
                margin="normal"
                required
                name="issueDate"
                label="Date of Issue"
                type="date"
                id="date"
                autoComplete="issueDate"
                style={{width:"49%"}}
                InputLabelProps={{ shrink: true  }} 
              />
               <TextField
                margin="normal"
                required
                name="expiryDate"
                label="Date of Expiry"
                type="date"
                id="date"
                style={{width:"49%", marginLeft:"1.85%"}}
                InputLabelProps={{ shrink: true  }} 
              />
                  <TextField
                margin="normal"
                required
                fullWidth
                name="businessField"
                label="Field of Business"
                type="name"
                id="businessField"
                autoComplete="businessField"
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="accrediationScheme"
                label="Accrediation Scheme"
                type="name"
                id="accrediationScheme"
                autoComplete="accrediationScheme"
              />
                <TextField
                margin="normal"
                required
                name="State"
                label="State"
                type="state"
                id="date"
                style={{width:"32%"}}
              />
                <TextField
                margin="normal"
                required
                name="Country"
                label="Country"
                type="country"
                id="date"
                style={{width:"32%", marginLeft:"1.85%"}}
              />
                <TextField
                margin="normal"
                required
                name="Pincode"
                label="Pincode"
                type="pincode"
                id="date"
                style={{width:"32%", marginLeft:"1.85%"}}
              />
            </Box>
    
  );
}
