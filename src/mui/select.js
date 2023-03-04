import { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

export default function Index() {
  const [country, setCountry] = useState("");

  return (
    <Box width={250}>
      <TextField
        label="Select country"
        select
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>
    </Box>
  );
}
