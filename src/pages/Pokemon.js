import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Chip, LinearProgress, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Pokemon = (props) => {
  const navigate = useNavigate();

  const clickHomeHandler = (e) => {
    navigate("/");
  };

  return (
    <>
      {/*pokemon information cards */}
      <Stack
        direction={{ sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        mt={2}
        mb={2}>
        <Card sx={{ width: 345, height: 475 }}>
          <CardContent>
            <Avatar sx={{ width: 56, height: 56 }}>{props.id}</Avatar>

            <Stack display="flex" alignItems="center" justifyContent="center">
              <Avatar
                src={props.sprite}
                sx={{ width: 250, height: 250 }}
                alt={props.name}
              />
            </Stack>

            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography mt={2} gutterBottom variant="h7" component="div">
              Abilities
            </Typography>

            {props.abilities?.map((ability, key) => (
              <div key={key}>
                <span>{ability.ability.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card sx={{ width: 345, height: 475 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Base Stats
            </Typography>
            {props.stats.map((stat, key) => (
              <div key={key}>
                <strong>
                  {stat.stat.name} {stat.base_stat}
                </strong>
                <LinearProgress
                  variant="determinate"
                  value={stat.base_stat * 0.39}
                />
              </div>
            ))}

            <Typography mt={2} gutterBottom variant="h7" component="div">
              Types
            </Typography>

            <Stack mt={3} ml={1} spacing={2} direction="row">
              {props.types?.map((type, key) => (
                <Chip key={key} label={type.type.name} />
              ))}
            </Stack>

            <Typography mt={4} gutterBottom variant="h7" component="div">
              Height: {props.height} ft.
            </Typography>

            <Typography gutterBottom variant="h7" component="div">
              Weight: {props.weight} lbs.
            </Typography>

            <Stack mt={3} spacing={2} direction="row"></Stack>
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
