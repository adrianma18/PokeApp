import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ pokemon, getPokemon }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate("/pokemon");
    console.log(pokemon.name);
    getPokemon(pokemon.name);
  };

  return (
    <Grid item xs={12} sm={3}>
      <Card sx={{ height: 120 }}>
        <CardActionArea onClick={clickHandler}>
          <CardContent align="center">
            <Avatar
              src={pokemon.sprites.front_default}
              sx={{ width: 70, height: 70 }}
            />

            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="div">
              {pokemon.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
