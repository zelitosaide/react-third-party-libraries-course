import { Box, MenuItem, TextField } from "@mui/material";

export default function Index() {
  return (
    <Box width={250}>
      <TextField
        label="Select country"
        select
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>
    </Box>
  );
}
