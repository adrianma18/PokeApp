import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

export const BottomNavbar = () => {
  const navigate = useNavigate();

  const clickHomeHandler = (e) => {
    navigate("/");
  };

  const clickProfileHandler = (e) => {
    navigate("/about");
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "sticky",
        bottom: 0,
      }}
      showLabels>
      <BottomNavigationAction
        onClick={clickHomeHandler}
        label="Home"
        icon={<HomeIcon />}></BottomNavigationAction>
      <BottomNavigationAction
        onClick={clickProfileHandler}
        label="About"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  );
};
