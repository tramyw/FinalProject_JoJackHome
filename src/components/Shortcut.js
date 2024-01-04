import { Stack, Box, Grid, Link } from "@mui/material";
import React from "react";
import HKSCDA_info from "../HKSCDA_animal_info.json";
import { Link as ReactLink } from "react-router-dom";

function Shortcut(props) {
  const shortCutSpecies = (input) => {
    props.setSelectedSpecies(input);
  };

  return (
    <Grid container spacing={5} direction="row" justifyContent="center" my={5}>
      {props.location === "Homepage" ? (
        <ReactLink
          to={{
            pathname: `/Category_Page`,
          }}
        >
          <Grid item>
            <Box borderRight={2} p={15} borderColor="#ff9800" color="#ff9800">
              <Stack direction="column">
                <img src="./icons/dog_icon.png" width="50px" alt="doggie"></img>
                {`待領養狗狗: ${HKSCDA_info.HKSCDA_dog.length}`}
              </Stack>
            </Box>
          </Grid>
        </ReactLink>
      ) : (
        <Link href="#" onClick={() => shortCutSpecies("dog")}>
          <Grid item>
            <Box borderRight={2} p={15} borderColor="#ff9800" color="#ff9800">
              <Stack direction="column">
                <img src="./icons/dog_icon.png" width="50px" alt="doggie"></img>
                {`待領養狗狗: ${HKSCDA_info.HKSCDA_dog.length}`}
              </Stack>
            </Box>
          </Grid>
        </Link>
      )}

      {props.location === "Homepage" ? (
        <ReactLink
          to={{
            pathname: `/Category_Page`,
          }}
        >
          <Grid item>
            <Box borderLeft={2} p={15} borderColor="#ff9800" color="#ff9800">
              <Stack direction="column">
                <img src="./icons/cat_icon.png" width="50px" alt="kitten"></img>
                {`待領養貓貓: ${HKSCDA_info.HKSCDA_cat.length}`}
              </Stack>
            </Box>
          </Grid>
        </ReactLink>
      ) : (
        <Link href="#" onClick={() => shortCutSpecies("cat")}>
          <Grid item>
            <Box borderLeft={2} p={15} borderColor="#ff9800" color="#ff9800">
              <Stack direction="column">
                <img src="./icons/cat_icon.png" width="50px" alt="kitten"></img>
                {`待領養貓貓: ${HKSCDA_info.HKSCDA_cat.length}`}
              </Stack>
            </Box>
          </Grid>
        </Link>
      )}

      {/* <Link href="#" onClick={() => shortCutSpecies("dog")}>
        <Grid item>
          <Box borderRight={2} p={15} borderColor="#ff9800" color="#ff9800">
            <Stack direction="column">
              <img src="./icons/dog_icon.png" width="50px" alt="doggie"></img>
              {`待領養狗狗: ${HKSCDA_info.HKSCDA_dog.length}`}
            </Stack>
          </Box>
        </Grid>
      </Link>
      <Link href="#" onClick={() => shortCutSpecies("cat")}>
        <Grid item>
          <Box p={15} borderLeft={2} borderColor="#ff9800" color="#ff9800">
            <Stack direction="column">
              <img src="./icons/cat_icon.png" width="50px" alt="kitten"></img>
              {`待領養貓貓: ${HKSCDA_info.HKSCDA_cat.length}`}
            </Stack>
          </Box>
        </Grid>
      </Link>*/}
    </Grid>
  );
}

export default Shortcut;
