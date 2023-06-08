import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

interface Props {}

const NavBar = (props: Props) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<String>("dashboard");

  return (
    <FlexBetween mb="0.24rem" p="0.5rem 0rem" color={theme.palette.grey[300]}>
      {/**LEFT SIDE */}
      <Link
        to="/"
        onClick={() => setSelected("dashboard")}
        style={{
          color: "inherit",
          textDecoration: "inherit",
        }}
      >
        <FlexBetween gap="0.75rem" sx={{ "&:hover": { cursor: "pointer" } }}>
          <PixIcon sx={{ fontSize: "28px" }} />
          <Typography variant="h4" fontSize="16px">
            Finance App
          </Typography>
        </FlexBetween>
      </Link>

      {/**Right Side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: theme.palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color:
                selected === "dashboard" ? "inherit" : theme.palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: theme.palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color:
                selected === "predictions"
                  ? "inherit"
                  : theme.palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default NavBar;
