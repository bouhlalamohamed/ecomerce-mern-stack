 

 
import { Box, Button, Typography } from "@mui/material";
import PrincipalSlider from "./PrincipalSlider";

const banners = [
  {
    id: 1,
    title: "FAST-SELLING PRODUCTS",
    image: "https://via.placeholder.com/800x400?text=Banner+1",
    bg: "#ff7a1a",
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
    image: "https://via.placeholder.com/800x400?text=Banner+2",
    bg: "#2d7ff9",
  },
];

export default function SecondSlider() {
  return (
    <PrincipalSlider
      items={banners}
    
      renderItem={(item) => (
        <Box
          sx={{
            position: "relative",
            height: "auto",
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: item.bg,
            height: "350px",
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Typography
            variant="h5"
            fontWeight={800}
            color="#fff"
            sx={{ position: "absolute", top: 16, left: 16, textShadow: "0 2px 4px rgba(0,0,0,.4)" }}
          >
            {item.title}
          </Typography>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              bgcolor: "#fff",
              color: "#000",
              borderRadius: 5,
              textTransform: "none",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            View more
          </Button>
        </Box>
      )}
    />
  );
}
