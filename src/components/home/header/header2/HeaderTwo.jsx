 

import { Box, Divider, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

export default function HeaderTwo() {
  return (
    <> <Box
        sx={{
          display: "flex",
          mt: 7,
          flexDirection: "row",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {[1, 2, 3].map((item, index) => (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                maxWidth: "420px",
              }}
            >
              <CheckRoundedIcon
                sx={{
                  fontSize: 36,
                  color: "#FF5722",
                  mt: "2px",
                  flexShrink: 0,
                  transform: "rotate(-8deg)",
                }}
              />

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#111",
                    lineHeight: 1.3,
                    mb: "2px",
                  }}
                >
                  Verified Supplier
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", lineHeight: 1.5 }}
                >
                  Connect with manufacturers with verified production
                  capabilities
                </Typography>
              </Box>
            </Box>
            {index < 2 && <Divider orientation="vertical" flexItem />}
          </>
        ))}
      </Box></>
  )
}
