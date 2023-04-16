// ** React Imports
import React, { useEffect, useState } from "react";

// ** Data imports
import dummyData from "../../../data/dummyData.json";

// ** UI Imports
import { Select, InputLabel, MenuItem, FormControl, Box } from "@mui/material";

function Home() {
  const [data, setData] = useState(dummyData || []);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [plots, setPlots] = useState([]);
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [plot, setPlot] = useState("");

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
    setCity("");
    setPlot("");
    let citiesData = [];
    data.forEach((item) => {
      if (item.district === event.target.value) {
        citiesData.push(item.city);
      }
    });
    setCities(Array.from(new Set(citiesData)));
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setPlot("");
    let plotsData = [];
    data.forEach((item) => {
      if (item.city === event.target.value) {
        plotsData.push(item.plot);
      }
    });
    setPlots(Array.from(new Set(plotsData)));
  };

  const handlePlotChange = (event) => {
    setPlot(event.target.value);
  };

  useEffect(() => {
    let districtsdata = dummyData.map((item) => {
      return item.district;
    });
    setDistricts(Array.from(new Set(districtsdata)));
  }, []);

  return (
    <>
      <Box
        width="100%"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <h1>Filtering Example</h1>
      </Box>
      <Box width="100%" sx={{ display: "flex" }}>
        <Box
          width="30%"
          height="50vh"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">District</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={district}
              label="Select district"
              onChange={handleDistrictChange}
            >
              {districts.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{ textTransform: "capitalize" }}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="Select city"
              onChange={handleCityChange}
            >
              {cities.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{ textTransform: "capitalize" }}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Plot</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={plot}
              label="Select plot"
              onChange={handlePlotChange}
            >
              {plots.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{ textTransform: "capitalize" }}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Box
          width="70%"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {dummyData
            .filter((item) => {
              if (city === "" && plot === "" && district === "") {
                return item;
              } else if (city === "" && plot === "" && district !== "") {
                return item.district === district;
              } else if (city !== "" && plot === "" && district !== "") {
                return item.city === city && item.district === district;
              } else {
                return (
                  item.district === district &&
                  item.city === city &&
                  item.plot === plot
                );
              }
            })
            .map((item, index) => {
              return (
                <img
                  src={item.image}
                  style={{ height: "250px", width: "250px" }}
                  alt="image"
                />
              );
            })}
        </Box>
      </Box>
    </>
  );
}

export default Home;
