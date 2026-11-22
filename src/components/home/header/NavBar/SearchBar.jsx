import { InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useState } from "react";
import {
  useIsTabletOrMobile,
  useIsLaptopOrMore,
} from "../../../../resposiveHook/useResponsive";
const ORANGE = "#ff6a00";

export const SearchBar = ({ isHome = false }) => {
  const [query, setQuery] = useState("");
  const isTabletOrMobile = useIsTabletOrMobile();
  const isLaptopOrMore = useIsLaptopOrMore();
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("search:", query);
      }}
      elevation={0}
      sx={{
        display: isHome && isTabletOrMobile ? "none" : "flex",
        alignItems: "center",
        maxHeight:"40px",
        flexGrow: 1,
        maxWidth: "720px",
        border: `2px solid ${ORANGE}`,
        borderRadius: "14px",
        
        pl: 1.5,
        visibility: isHome
          ? "visible"
          : isTabletOrMobile
            ? "visible"
            : "hidden",
             "&:hover": {
            boxShadow: "0 0 17px 1px #fac198",
          },
      }}
    >
      <InputBase
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        sx={{ flex: 1, fontSize: 14 }}
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton size="small" aria-label="image search">
        <CameraAltOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton
        size="small"
        type="submit"
        sx={{
          "&:hover": {
            bgcolor: "#e55f00",
          },

          borderRadius: "14px",
          textTransform: "none",
          fontWeight: 600,
          width: 40,
          mr: 0.2,
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
