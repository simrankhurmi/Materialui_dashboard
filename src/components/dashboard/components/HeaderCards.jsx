import { Avatar, Card, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import { Box, Stack } from "@mui/system";

const HeaderCards = ({ title, subtitle, amount, color }) => {
  return (
    <Card variant="soft" sx={{ padding: "20px", borderRadius: "10px" , bgcolor:`${color}`}}>
      <Grid container sx={{justifyContent:"space-between"}}>
        <Grid item sx={{ alignContent: "center" }}>
          <Stack direction="column">
            <Box>
              <Typography variant="h4" color="#fff" >
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle" color="#fff" >
                {subtitle}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item sx={{ alignContent: "start" }} color="#fff">
          {amount}
      </Grid>
      </Grid>
    </Card>
  );
};

export default HeaderCards;
