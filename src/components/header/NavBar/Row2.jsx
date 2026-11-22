import React from "react";
import { Toolbar, Box, Typography, Link, Stack } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export const Row2 = () => {
  return (
    <div>
      <Toolbar variant="dense" sx={{ gap: 3, fontSize: 13, minHeight: 40 }}>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{ cursor: "pointer", fontWeight: 600, alignItems: "center" }}
        >
          <MenuIcon fontSize="small" />
          <Typography variant="body2" fontWeight={600}>
            All categories
          </Typography>
        </Stack>
        <Link
          href="#"
          underline="hover"
          color="inherit"
          variant="body2"
          sx={{ transition: "0.1s" }}
        >
          Verified manufacturers
        </Link>
        <Link href="#" underline="hover" color="inherit" variant="body2">
          Dropshipping
        </Link>
        <Box sx={{ flex: 1 }} />
        <Link href="#" underline="hover" color="inherit" variant="body2">
          Advertise on Alibaba.com
        </Link>
        <Link href="#" underline="hover" color="inherit" variant="body2">
          Help Center
        </Link>
        <Link href="#" underline="hover" color="inherit" variant="body2">
          Alibaba Work
        </Link>
      </Toolbar>
    </div>
  );
};
