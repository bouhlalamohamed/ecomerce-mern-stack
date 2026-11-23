import * as React from "react";
import { Fragment } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
  Avatar,
  Badge,
  Card,
  IconButton,
  Slide,
  ClickAwayListener,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DevicesIcon from "@mui/icons-material/Devices";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import DiamondIcon from "@mui/icons-material/Diamond";
import { useSelector ,useDispatch } from "react-redux";

import { setShowCategories } from "../../../../src/store/showCategoriesSlice.js";

const menuItems = [
  { label: "Categories for you", icon: <StarIcon /> },
  { label: "Apparel & Accessories", icon: <CheckroomIcon /> },
  { label: "Consumer Electronics", icon: <DevicesIcon /> },
  { label: "Home & Garden", icon: <HomeIcon /> },
  { label: "Sports & Entertainment", icon: <SportsSoccerIcon /> },
  { label: "Jewelry, Eyewear & Watches", icon: <DiamondIcon /> },
];

const categories = [
  { name: "Smart Watches", img: "/images/smartwatch.jpg", hot: true },
  { name: "Laptops", img: "/images/laptop.jpg", hot: true },
  { name: "Smartphones", img: "/images/phone.jpg", hot: true },
  { name: "Cars", img: "/images/car.jpg", hot: false },
  { name: "Mobile Phones", img: "/images/mobile.jpg", hot: false },
  { name: "Hoodies", img: "/images/hoodie.jpg", hot: false },
  { name: "Dresses", img: "/images/dress.jpg", hot: false },
];
const border = "7px solid red";
export default function Categories() {
    const dispatch = useDispatch();
  const showCategories = useSelector((state) => state.showCategories.open);
  const handleClose = () => setOpen(false);
  const [selected, setSelected] = React.useState(0);
  if (!showCategories) return null;
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0, // تغطي الشاشة كاملة
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(8px)", // لـ Safari
        zIndex: 100,
          
      }}
    >
    
          <Card
            sx={{
              display: "flex",
              height: "400px",
              width: "80%",
              borderRadius: "20px",
              position: "absolute",
              top: 150,
              right: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
          
            }}
          >
            <IconButton
                 onClick={() => dispatch(setShowCategories(false))}
              sx={{ position: "absolute", top: 8, right: 8, zIndex: 11 }}
            >
              <CloseIcon />
            </IconButton>
            {/* menu iteams */}
            <Box sx={{ width: 260, overflowY: "auto" }}>
              <List>
                {menuItems.map((item, i) => (
                  <ListItemButton
                    key={item.label}
                    selected={selected === i}
                    onClick={() => setSelected(i)}
                    sx={{ borderRadius: 1, mx: 1 }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.label}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
            {/* products */}
            <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
               
              <Grid container spacing={3}>
                {categories.map((cat, index) => (
                  <Fragment key={cat.name}>
                    {index === 0 && (
                      <Typography
                        variant="h6"
                        sx={{ mb: 2, fontWeight: 600, width: "100%" }}
                       
                      >
                        {menuItems[selected].label}
                      </Typography>
                    )}
                    <Grid                       
                      xs={6}
                      sm={4}
                      md={3}
                      lg={2}
                      key={cat.name}
                      sx={{ textAlign: "center" }}
                    >
                      <Badge
                        color="warning"
                        variant="dot"
                        invisible={!cat.hot}
                        overlap="circular"
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      >
                        <Avatar
                          src={cat.img}
                          alt={cat.name}
                          sx={{
                            width: 96,
                            height: 96,
                            mx: "auto",
                            bgcolor: "#f5f5f5",
                            cursor: "pointer",
                            transition: "transform .2s",
                            "&:hover": { transform: "scale(1.05)" },
                          }}
                        />
                      </Badge>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {cat.name}
                      </Typography>
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </Box>
          </Card>
     
    </Box>
  );
}
