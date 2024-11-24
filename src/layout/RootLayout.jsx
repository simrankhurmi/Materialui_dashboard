import { Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from "react-router-dom";
import Appbar from './components/Appbar';
import Sidebar from './components/Sidebar';
const drawerWidth = 240;

const RootLayout = ({children}) => {
  return (
   <>
    <Box sx={{ display: "flex" }} >
      <CssBaseline />
     <Appbar/>
     <Sidebar/>
      <Box component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor:"#F7F8FB"}}>
        <Toolbar />
      <Outlet/>
      </Box>
    </Box>
   </>
  )
}

export default RootLayout
