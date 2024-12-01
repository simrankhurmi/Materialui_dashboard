import React, { useEffect, useState } from "react";
import { Button, Card, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import HeaderCards from "./components/HeaderCards";
import ChartsOverviewDemo from "../../utilities/BarChart";
import PieChartWithCustomizedLabel from "../../utilities/PieChartD";
import { cardsData } from "./components/CardsData";
import Notification from "./components/Notification";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { TodoList } from "../../redux/dataSlice";

import { Box, width } from "@mui/system";

const Dashboard = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { todolist,Loading,error } = useSelector((state) => state.data);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(TodoList());
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "title", headerName: "Project Title", width: 200, flex: 3 },
    {
      field: "completed",
      headerName: "Status",
      type: "boolean",
      flex: 1,
      width: 110,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          sx={{
            color: params.row.completed ? "green" : "darkred",
            borderColor: params.row.completed ? "green" : "darkred",
            backgroundColor: params.row.completed ? "lightgreen" : "#FFCCCB", // Light red background for "Pending"
            "&:hover": {
              backgroundColor: params.row.completed ? "#d4f3d4" : "#F5A9A9", // Slightly darker on hover
            },
          }}
        >
          <Typography
            sx={{
              color: params.row.completed ? "green" : "darkred",
            }}
          >
            {params.row.completed ? "Completed" : "Pending"}
          </Typography>
        </Button>
      ),
    },
  ];
  return (
    <>
      <Grid container spacing={2} sx={{ display: "flex", flexWrap: "wrap" }}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", flexWrap: "wrap" }}>
            {cardsData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                <HeaderCards
                  title={item.title}
                  subtitle={item.subtitle}
                  amount={item.amount}
                  color={item.color}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} mt={2} spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <Card sx={{ padding: "20px" }}>
                  <ChartsOverviewDemo />
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card sx={{ padding: "23px 0 23px 0" }}>
                  <Notification />
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Grid container spacing={2}>
              {Loading ?
             <Box
             sx={{
               display: "flex",
               justifyContent: "center", 
               alignItems: "center", 
               width: "100%",
               height: "100vh", 
             }}
           >
                <CircularProgress/>
              </Box>:
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                {!error?
                <DataGrid
                  rows={todolist ?? []}
                  columns={columns}
                  pageSize={pageSize}
                  rowsPerPageOptions={[10, 20, 30]}
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
                />:
                <Box
                sx={{
                  display: "flex",
                  justifyContent: "center", 
                  alignItems: "center", 
                  width: "100%",
                  height: "100vh", 
                }}
              >
                <Typography>No Data Found</Typography>
              </Box>
                }
              </Grid>
              }
              {/* PieChart Section */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Card sx={{ width: "100%", padding: 2 ,display:"flex"}}>
                  <PieChartWithCustomizedLabel />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
