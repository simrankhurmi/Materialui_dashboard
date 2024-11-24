import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid, Box } from '@mui/material';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Container sx={{ display: 'flex', height: '100vh' }}>
      {/* First Section */}
      <Box sx={{ width: '30%', backgroundColor: '#f0f0f0', p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
          <img src="your_logo.png" alt="Logo" style={{ width: 100, height: 'auto' }} />
        </Box>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Box sx={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
          <footer>
            <Typography variant="body2">
              Your footer text here
            </Typography>
          </footer>
        </Box>
      </Box>

      {/* Second Section */}
      <Box sx={{ width: '70%', backgroundColor: '#ffffff', p: 2 }}>
        <Box sx={{ borderBottom: '1px solid #ccc', pb: 2 }}>
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
