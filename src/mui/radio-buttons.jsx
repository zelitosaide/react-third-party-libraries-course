import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function Index() {
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
        >
          <FormControlLabel
            control={<Radio />}
            label="0-2"
            value="0-2"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
