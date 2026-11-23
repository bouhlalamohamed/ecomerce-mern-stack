// components/MuiCarousel.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";

import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";

export default function PrincipalSlider({ items, renderItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        width: "400px",
        maxHeight: "400px",
        zIndex: 2,

        "& .swiper-button-next, & .swiper-button-prev": {
          color: "#f0ecec",
          opacity: hovered ? 1 : 0,
          pointerEvents: hovered ? "auto" : "none",
          transition: "opacity 0.25s ease",
          fontWeight: 900,
        },
        "@media (hover: none)": {
          "& .swiper-button-next, & .swiper-button-prev": {
            opacity: 1,
            pointerEvents: "auto",
            fontWeight: 900,
          },
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id ?? index} style={{ width: "50px"   }}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
