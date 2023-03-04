import { Stack, TextField } from "@mui/material";

export default function Index() {
  return (
    <Stack
      spacing={4}
      style={{ marginBottom: 16 }}
    >
      <Stack
        direction="row"
        spacing={2}
      >
        <TextField
          label="Name"
          variant="outlined"
        />
        <TextField
          label="Name"
          variant="filled"
        />
        <TextField
          label="Name"
          variant="standard"
        />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
      >
        <TextField
          label="Small secondary"
          color="secondary"
          size="small"
        />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
      >
        <TextField
          label="Form Input"
          color="secondary"
          size="small"
          required
        />
        <TextField
          label="Password"
          type="password"
          size="small"
          helperText="Do not share your password with anyone"
        />
      </Stack>
    </Stack>
  );
}
