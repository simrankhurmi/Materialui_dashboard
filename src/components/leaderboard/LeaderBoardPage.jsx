import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/dataSlice";

const LeaderBoardPage = () => {
  const dispatch = useDispatch();
  const myData= useSelector((state)=>state.data)

  const handleClick = () => {
    dispatch(fetchData());
  };

  useEffect(()=>{
    dispatch(fetchData());
  },[])

console.log(myData, "dta.....")
  return (
    <>
      <div>LeaderBoardPage</div>
      <Button variant="contained" onClick={handleClick}>
        Click me
      </Button>
    </>
  );
};

export default LeaderBoardPage;
