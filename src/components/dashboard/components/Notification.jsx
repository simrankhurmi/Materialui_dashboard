import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Info } from "./NotificationsData";

const Notification = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <div>
      <List>
        <ListItem>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Our Subscriptions
          </Typography>
        </ListItem>
        {Info.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: "#000059" }}>{item.listIcon}</Avatar>
              </ListItemIcon>
              <ListItemText primary={item.listText} />
              <Button
                variant="contained"
                size="small"
                sx={{
                  color: "green",
                  borderColor: "green",
                  backgroundColor: "lightgreen",
                  "&:hover": {
                    backgroundColor: "#d4f3d4",
                  },
                }}
              >
                <Typography sx={{ color: "green" }}>
                  {item.buttonLabel}
                </Typography>
              </Button>
              <IconButton
                aria-label="more"
                aria-controls={`menu-${index}`}
                aria-haspopup="true"
                onClick={handleMenuOpen}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id={`menu-${index}`}
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
              </Menu>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Notification;
