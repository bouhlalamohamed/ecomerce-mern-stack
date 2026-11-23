 


import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import PrincipalSlider from "./PrincipalSlider";

const products = [
  {
    id: 1,
    title: "Browsing history",
    subtitle: "Air conditioner",
    image: "https://via.placeholder.com/300x200?text=AC",
    
  },
  {
    id: 2,
    title: "Frequently searched",
    subtitle: "Smart Watches",
    image: "https://via.placeholder.com/300x200?text=Watch",
  },
  {
    id: 3,
    title: "Frequently searched",
    subtitle: "Laptops",
    image: "https://via.placeholder.com/300x200?text=Laptop",
  },
];

export default function FirstSlider() {
  return (
    <PrincipalSlider
      items={products}
    
      renderItem={(item) => (
        <Card elevation={1} sx={{ borderRadius: "8px", height: "auto" }}>
          <Box sx={{ px: 2, pt: 1.5 }}>
            <Typography variant="caption" color="text.secondary">
              {item.title}
            </Typography>
          </Box>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.subtitle}
            sx={{ height:20, objectFit: "contain", p: 1,borderRadius: "8px" }}
          />
          <CardContent sx={{ pt: 0 }}>
            <Typography variant="subtitle2">{item.subtitle}</Typography>
            {item.price && (
              <Typography variant="h6" fontWeight={700}>
                {item.price}
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
    />
  );
}

