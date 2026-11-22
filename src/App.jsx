import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/header/NavBar/Navbar.jsx";

function App() {
  return (
    <Box>
      <Navbar />

      <Outlet />
    </Box>
  );
}

export default App;
