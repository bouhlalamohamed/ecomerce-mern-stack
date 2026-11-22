import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  Button,
  IconButton,
  Badge,
  Link,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {SearchBar} from "./SearchBar";
import {Row2} from "./Row2";
import { useIsTabletOrMobile } from "../../../resposiveHook/useResponsive";

const ORANGE = "#ff6a00";
const border = "1px solid #e70202";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  //  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));
  // const isLaptopOrMore = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        // bgcolor: "rgb(255, 244, 236)",
        color: "#222",
            background: `linear-gradient(to left, rgb(255, 244, 236) 50%,  rgb(61, 108, 159)500%)`,

         
      }}
    >
      {/* first row*/}
      <Toolbar
        sx={{
          gap: 1,
          minHeight: 64,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "1rem",
            color: ORANGE,
            letterSpacing: -0.5,
          }}
        >
          Alibaba.com
        </Typography>

        {/* search bar */}
        <SearchBar  />
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none" ,lg:"block"} }}></Box>

        {/* Country, Language, and Currency */}
        {!useIsTabletOrMobile() && (
           <>
            <Stack
              direction="row"
              
              spacing={0.5}
              sx={{
                fontSize: 13,
                whiteSpace: "nowrap",
                color: "#555",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <LocationOnOutlinedIcon fontSize="small" />
              <Box>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ lineHeight: 1 }}
                >
                  Deliver to
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{ lineHeight: 1.2 }}
                >
                  UAE
                </Typography>
              </Box>
            </Stack>

            <Typography
              variant="body2"
              sx={{ whiteSpace: "nowrap", cursor: "pointer", fontWeight: 500 }}
            >
              English - USD
            </Typography>

            <IconButton aria-label="cart">
              <Badge badgeContent={0} color="warning">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>

            <Button
              startIcon={<PersonOutlinedIcon />}
              sx={{
                color: "#222",
                textTransform: "none",
                whiteSpace: "nowrap",
              }}
            >
              Sign in
            </Button>

            <Button
              variant="contained"
              disableElevation
              sx={{
                bgcolor: ORANGE,
                "&:hover": { bgcolor: "#e55f00" },
                textTransform: "none",
                borderRadius: 1,
                whiteSpace: "nowrap",
                fontWeight: 600,
              }}
            >
              Create account
            </Button>
          </>
         
         
        )}
      </Toolbar>

      {/*  second row */}
     
      {!useIsTabletOrMobile()&& <Row2 />}
      
    </AppBar>
  );
};

export default Navbar;
