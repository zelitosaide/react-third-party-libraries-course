import { Button, Stack } from "@mui/material";

export default function Index() {
  return (
    <Stack spacing={4}>
      <Stack
        spacing={2}
        direction="row"
      >
        <Button
          variant="text"
          href="https://google.com"
        >
          Text
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Stack>

      <Stack
        spacing={2}
        direction="row"
      >
        <Button
          variant="contained"
          color="primary"
        >
          Primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
        >
          Secondary
        </Button>
        <Button
          variant="contained"
          color="error"
        >
          Error
        </Button>
        <Button
          variant="contained"
          color="warning"
        >
          Warning
        </Button>
      </Stack>
    </Stack>
  );
}
