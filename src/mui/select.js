import { useState } from "react";
import { Box, MenuItem, Stack, TextField } from "@mui/material";

export default function Index() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  return (
    <Stack spacing={4}>
      <Stack>
        <Box width={250}>
          <TextField
            label="Select country"
            select
            fullWidth
            value={country}
            onChange={function (e) {
              setCountry(e.target.value);
            }}
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
            <MenuItem value="US">USA</MenuItem>
          </TextField>
        </Box>
      </Stack>
      <Stack>
        <Box width={250}>
          <TextField
            label="Select countries"
            select
            fullWidth
            value={countries}
            onChange={function (e) {
              console.log(e.target.value);
              setCountries(e.target.value);
            }}
            SelectProps={{ multiple: true }}
            size="small"
            color="secondary"
            helperText="Please select your country"
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
            <MenuItem value="US">USA</MenuItem>
          </TextField>
        </Box>
      </Stack>
    </Stack>
  );
}
