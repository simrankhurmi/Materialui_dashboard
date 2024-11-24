import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// import theme from "../App";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { UsersList } from "../../redux/dataSlice";
import { DataGrid } from "@mui/x-data-grid";

const HomePage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { listing, Loading, error } = useSelector((state) => state.data);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [pageSize, setPageSize] = useState(10); 
  // const handleOpenAddModal=()=>{
  //   setOpenAddModal(true)
  // }

  console.log(listing.length, "list is....22");

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };
  
  const columns = [
    { field: 'id',
       headerName: 'ID', 
       flex:1,
       width: 90 ,
      },

    { field: 'name', 
      headerName: 'Name', 
      width: 150 ,
      flex:1
    },
    { field: 'username', 
      headerName: 'Username', 
      width: 150 ,
      flex:1
    },
    { field: 'email', 
      headerName: 'Email',
       type: 'number', 
       flex:1,
       width: 110 ,
       renderCell: (params) => (
        <a href={`mailto:${params.value}`}>{params.value}</a>
      ),
      },
  ];

  useEffect(() => {
    dispatch(UsersList());
  }, []);

  return (
    <>
        <Grid
         container display="flex"
          sx={{width: "100%" }}>
          <Grid item xs={12} sx={{mb:1}}> 
              <Typography variant="h5" color={theme.palette.text.primary} sx={{fontSize:"36px"}}>
                Login Details
              </Typography>
          <Divider color="#1e1e1e" sx={{mt:1}}/>
          </Grid>
          <Grid item xs={12} sx={{mb:1,mt:1}}> 
            <Grid container sx={{justifyContent:"space-between"}}>
              <Grid item>
              <Box>
                <TextField
                  label="search"
                  id="search"
                  sx={{ width: "25ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                />
              </Box>
              </Grid>
              <Grid item>
              <Box>
                <Button
                  variant="contained"
                  backgroundColor={theme.palette.secondary.main}>
                  <Typography variant="h6" color={theme.palette.text.main}>
                    Add New Account
                  </Typography>
                </Button>
              </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}> 
              <DataGrid
                rows={listing??"-"}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10,20,30]}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                sx={{
                  padding: 2,
                  height: "400px",
                  width:"100%",
                  "& .MuiDataGrid-columnHeaderTitleContainer": {
                    backgroundColor: "#000059",
                    color: "white",
                    fontSize:"16px",
                    padding:"0 20px"
                  },
                  "& .MuiDataGrid-columnSeparator": {
                    display: "none", 
                  },
                  "& .MuiDataGrid-columnHeader": {
                    padding:"0px!important",
                  },
                  "& .MuiDataGrid-menuIcon": {
                   display:"none"
                  },
                }}
              />
        </Grid>
        </Grid>
      <Drawer anchor="left" open={openAddModal} onClose={handleCloseAddModal}>
        PaperProps=
        {{style: { width: "700px" }}}
      </Drawer>
    </>
  );
};

export default HomePage;
