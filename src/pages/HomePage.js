import { Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { PokemonCard } from "../components/PokemonCard";

export const HomePage = ({
  allPokemon,
  goToNextPage,
  goToPrevPage,
  getPokemon,
}) => {
  return (
    <>
      {/*top navigation button */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mt={2}
        mb={2}>
        {goToPrevPage && (
          <Button variant="contained" onClick={goToPrevPage}>
            Prev
          </Button>
        )}
        {goToNextPage && (
          <Button variant="contained" onClick={goToNextPage}>
            Next
          </Button>
        )}
      </Stack>

      {/*Grid with all the pokemon cards */}
      <Grid container spacing={2}>
        {allPokemon.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              getPokemon={getPokemon}
            />
          );
        })}
      </Grid>

      {/*bottom navigation button */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mt={2}
        mb={2}>
        {goToPrevPage && (
          <Button variant="contained" onClick={goToPrevPage}>
            Prev
          </Button>
        )}
        {goToNextPage && (
          <Button variant="contained" onClick={goToNextPage}>
            Next
          </Button>
        )}
      </Stack>
    </>
  );
};
