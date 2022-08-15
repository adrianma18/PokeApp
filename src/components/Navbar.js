import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MuiSwitch from "./MuiSwitch";
import { Link } from "react-router-dom";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = ({ checked, change }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const navigateHome = (e) => {
    navigate("/");
  };

  const toggleDrawerHome = () => {
    setDrawerOpen(!drawerOpen);
    navigate("/");
  };

  const toggleDrawerAbout = () => {
    setDrawerOpen(!drawerOpen);
    navigate("/about");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          onClick={navigateHome}
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            PokeApp
          </Link>
        </Typography>

        <Stack direction="row" spacing={2}>
          <MuiSwitch onChange={change} checked={checked} />

          {matches ? null : (
            <>
              <Button color="inherit">
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to={"/about"}
                  style={{ textDecoration: "none", color: "white" }}>
                  About
                </Link>
              </Button>
            </>
          )}
        </Stack>

        {matches ? (
          <IconButton onClick={toggleDrawer} edge="end">
            <MenuIcon />
          </IconButton>
        ) : null}
      </Toolbar>

      {/* menu for mobile devices*/}
      <Drawer
        anchor="right"
        variant="temporary"
        onClose={toggleDrawer}
        open={drawerOpen}>
        <Button onClick={toggleDrawerHome} variant="contained" size="large">
          Home
        </Button>

        <Button onClick={toggleDrawerAbout} variant="contained" size="large">
          About
        </Button>
      </Drawer>
    </AppBar>
  );
};
