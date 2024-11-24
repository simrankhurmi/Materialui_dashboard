import React, { useContext } from 'react'
import {  Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContrastIcon from '@mui/icons-material/Contrast';
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from '@emotion/react';


const drawerWidth = 240;
const Sidebar = () => {
    const { toggleTheme, themeMode } = useContext(ThemeContext);

    const theme = useTheme();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
  
    const drawer = (
      <div>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
  
          <ListItem disablePadding>
            <ListItemButton component={Link} to="leaderboard">
              <ListItemIcon>
                <LeaderboardIcon />
              </ListItemIcon>
              <ListItemText primary="Leaderboard" />
            </ListItemButton>
          </ListItem>
  
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/products">
              <ListItemIcon>
                <LoyaltyIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
  
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/settings">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
  
          <ListItem disablePadding>
            <ListItemButton  onClick={toggleTheme}>
              <ListItemIcon>
                <ContrastIcon />
              </ListItemIcon>
              <ListItemText primary="Change Theme" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    );
  return (
<>
<Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        backgroundColor={theme.palette.secondary.main}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
          
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{ 
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              marginTop:"66px",
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
</>
  )
}

export default Sidebar