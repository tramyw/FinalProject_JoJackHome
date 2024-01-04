import React, { useState } from "react";
import HKSCDA_info from "../HKSCDA_animal_info.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import AnimalList from "./AnimalList.js";
import Shortcut from "./Shortcut.js";

function FilterBar() {
  let unfilteredInfo = [];
  for (let keys in HKSCDA_info) {
    unfilteredInfo.push(...HKSCDA_info[keys]);
  }

  const handleSpeciesChange = (e) => {
    setSelectedSpecies(e.target.value);
  };
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleChipChange = (e) => {
    setSelectedChip(e.target.value);
  };

  const handleCastratedChange = (e) => {
    setSelectedCastrated(e.target.value);
  };

  const [selectedSpecies, setSelectedSpecies] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedChip, setSelectedChip] = useState("all");
  const [selectedCastrated, setSelectedCastrated] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  const handleFilterOnClick = () => {
    const newFilteredList = unfilteredInfo.filter((el) => {
      return (
        (selectedSpecies === "all"
          ? el.species === "dog" || el.species === "cat"
          : el.species === selectedSpecies) &&
        (selectedGender === "all"
          ? el.gender === "女" || el.gender === "男"
          : el.gender === selectedGender) &&
        (selectedChip === "all"
          ? el.chipped === "未植入" ||
            el.chipped === "已植入" ||
            el.chipped === "/"
          : el.chipped === selectedChip) &&
        (selectedCastrated === "all"
          ? el.castrated === "未絕育" || el.castrated === "已絕育"
          : el.castrated === selectedCastrated)
      );
    });
    setFilteredList(newFilteredList);
  };
  const handleClearOnClick = () => {
    setSelectedSpecies("all");
    setSelectedGender("all");
    setSelectedChip("all");
    setSelectedCastrated("all");
  };

  return (
    <>
      <Shortcut
        selectedSpecies={selectedSpecies}
        setSelectedSpecies={setSelectedSpecies}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        data={unfilteredInfo}
        location="CategoryPage"
      />
      <Stack
        direction="row"
        my={10}
        justifyContent="center"
        className="filterBar"
        flexWrap="wrap"
      >
        <FormControl sx={{ minWidth: "220px" }}>
          <InputLabel id="speciesFiltering">品種</InputLabel>
          <Select
            labelId="speciesFiltering"
            id="chosenSpecies"
            label="品種"
            onChange={handleSpeciesChange}
            value={selectedSpecies}
          >
            <MenuItem value="all">所有</MenuItem>
            <MenuItem value="dog">狗狗</MenuItem>
            <MenuItem value="cat">貓貓</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: "220px" }}>
          <InputLabel id="genderFiltering">性別</InputLabel>
          <Select
            labelId="genderFiltering"
            id="chosenGender"
            label="性別"
            onChange={handleGenderChange}
            value={selectedGender}
          >
            <MenuItem value="all">所有</MenuItem>
            <MenuItem value="女">女</MenuItem>
            <MenuItem value="男">男</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: "220px" }}>
          <InputLabel id="chipFiltering">晶片</InputLabel>
          <Select
            labelId="chipFiltering"
            id="is_Chip"
            label="晶片"
            onChange={handleChipChange}
            value={selectedChip}
          >
            <MenuItem value="all">所有</MenuItem>
            <MenuItem value="未植入">未植入</MenuItem>
            <MenuItem value="已植入">已植入</MenuItem>
            <MenuItem value="/">Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: "220px" }}>
          <InputLabel id="castratedFiltering">絕育</InputLabel>
          <Select
            labelId="castratedFiltering"
            id="is_castrated"
            label="絕育"
            onChange={handleCastratedChange}
            value={selectedCastrated}
          >
            <MenuItem value="all">所有</MenuItem>
            <MenuItem value="未絕育">未絕育</MenuItem>
            <MenuItem value="已絕育">已絕育</MenuItem>
          </Select>
        </FormControl>
        <Stack direction="row">
          <Button
            variant="contained"
            color="warning"
            onClick={handleFilterOnClick}
          >
            Filter
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleClearOnClick}
          >
            Clear All
          </Button>
        </Stack>
      </Stack>
      <Stack>
        <AnimalList
          data={filteredList.length > 0 ? filteredList : unfilteredInfo}
        />
      </Stack>
    </>
  );
}

export default FilterBar;
