import React from "react";
import FirstSlider from "./sliders/FirstSlider";
import { Box, Divider } from "@mui/material";
import SecondSlider from "./sliders/SecondSlider";
 
const HeaderThree = () => {
  return (
    <Box
      sx={{
        display: "flex",
        mt:7,
        gap: 7,
        justifyContent: "center",
        alignItems: "center",
         
      }}
    >
      
      <FirstSlider />
      <Divider orientation="vertical" flexItem />
      <SecondSlider />
      <Divider orientation="vertical" flexItem />

      <SecondSlider />
    </Box>
  );
};

export default HeaderThree;
