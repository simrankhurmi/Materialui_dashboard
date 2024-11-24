import React, { useState } from "react";
import { Button, TextField, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/images/signbg.jpg";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard/home");
    console.log(formData);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "100vh",
        width: "100%",
        alignContent: "center",
        paddingTop: "100px",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: -1,
        },
      }}
    >
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Typography variant="h2" sx={{ color: "white" }}>
          Welcome to Sign In
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Adds a slight white background to make form more readable
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography> 
          <form onSubmit={handleSubmit} noValidate>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
