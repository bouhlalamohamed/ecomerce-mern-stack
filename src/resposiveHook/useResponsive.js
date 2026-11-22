

import { useMediaQuery, useTheme } from "@mui/material";
 // true or false
export const useIsTabletOrMobile = () => {
    return useMediaQuery(useTheme().breakpoints.down("md"));
};

 // true or false
export const useIsLaptopOrMore = () => {
    return useMediaQuery(useTheme().breakpoints.up("lg"));
};
