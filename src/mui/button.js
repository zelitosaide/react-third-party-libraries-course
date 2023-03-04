import { Button, Stack } from "@mui/material";

export default function Index() {
  return (
    <Stack
      spacing={2}
      direction="row"
    >
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
    </Stack>
  );
}
