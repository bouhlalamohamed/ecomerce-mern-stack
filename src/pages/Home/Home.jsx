 import { SearchBar } from "../../components/home/header/NavBar/SearchBar.jsx";
import { Box } from "@mui/material";
import { useIsTabletOrMobile } from "../../resposiveHook/useResponsive";
import { Typography } from "@mui/material";
import HeaderTwo from "../../components/home/header/header2/HeaderTwo.jsx";
import Categories from "../../components/home/categoriesProduct/Categories.jsx";
import HeaderThree from "../../components/home/header/header3/HeaderThree.jsx";

const border = "1px solid red";
export default function Home() {
  return (
    <Box>
      {!useIsTabletOrMobile() && (
        <>
          <Box
            sx={{
              height: "200px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              background: `linear-gradient(to left, rgb(255, 244, 236) 50%, rgb(61, 108, 159)500%)`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                gap: 3,
              }}
            >
              <Typography variant="h4">Product</Typography>
              <Typography variant="h4">Manufacturers</Typography>
              <Typography variant="h4">Worldwide</Typography>
            </Box>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <SearchBar isHome={true} />
            </Box>
          </Box>
          <HeaderTwo />
          <Categories />
          <HeaderThree />
        </>
      )}
    </Box>
  );
}
