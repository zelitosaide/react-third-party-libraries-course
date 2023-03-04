import { Box, TextField } from "@mui/material";

export default function Index() {
  return (
    <Box width={250}>
      <TextField
        label="Select country"
        select
      ></TextField>
    </Box>
  );
}
