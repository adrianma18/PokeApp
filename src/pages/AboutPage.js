import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import HandymanIcon from "@mui/icons-material/Handyman";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";

export const AboutPage = () => {
  const navigate = useNavigate();

  const clickHomeHandler = (e) => {
    navigate("/");
  };

  return (
    <>
      <Stack
        direction={{ sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        mt={2}
        mb={2}>
        <Card sx={{ width: 345, height: 475 }}>
          <CardContent>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              <CatchingPokemonIcon fontSize="large" /> PokeApp
            </Typography>

            <Typography mt={3} mb={3} variant="h6">
              PokeApp is an application that uses the PokeApi to grab and
              display pokemon information.
            </Typography>
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"></img>

            <Typography mt={6} variant="subtitle2">
              *Pokemon and Pokemon character names are trademarks of Nintendo.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 345, height: 475 }}>
          <CardContent>
            <Typography
              mb={5}
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}>
              <HandymanIcon fontSize="medium" /> TechStack
            </Typography>
            <Typography m={2} variant="h5">
              • React
            </Typography>
            <Typography m={2} variant="h5">
              • Material UI
            </Typography>

            <Typography ml={7} mt={8} variant="h4" component="div">
              <GitHubIcon fontSize="large" /> Github
            </Typography>

            <Typography ml={7} mt={9} variant="h4" component="div">
              <FolderSpecialIcon fontSize="large" /> Portfolio
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/*navigation buttons*/}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mt={2}
        mb={2}>
        <Button
          startIcon={<ArrowBackIcon />}
          size="large"
          variant="contained"
          onClick={clickHomeHandler}>
          Go Back
        </Button>
      </Stack>
    </>
  );
};
