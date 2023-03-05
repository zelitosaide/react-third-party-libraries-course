import { useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function Index() {
  const [value, setValue] = useState("");

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={function (e) {
            setValue(e.target.value);
          }}
          row
        >
          <FormControlLabel
            control={
              <Radio
                color="secondary"
                size="small"
              />
            }
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
