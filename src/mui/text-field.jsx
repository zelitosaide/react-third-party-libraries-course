import { Stack, TextField, InputAdornment } from "@mui/material";

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
          disabled
        />
        <TextField
          label="Read Only"
          size="small"
          InputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
      >
        <TextField
          label="Amount"
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}
