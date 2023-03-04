import { useState } from "react";

import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import {
  Send as SendIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
} from "@mui/icons-material";

export default function Index() {
  const [formats, setFormats] = useState([]);

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
        <Button
          variant="contained"
          disableElevation
        >
          Contained
        </Button>
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
        <Button
          variant="contained"
          color="info"
        >
          Info
        </Button>
        <Button
          variant="contained"
          color="success"
        >
          Success
        </Button>
      </Stack>
      <Stack
        display="block"
        spacing={2}
        direction="row"
      >
        <Button
          variant="contained"
          size="small"
        >
          Small
        </Button>
        <Button
          variant="contained"
          size="medium"
        >
          Medium
        </Button>
        <Button
          variant="contained"
          size="large"
        >
          Large
        </Button>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
      >
        <Button
          variant="contained"
          startIcon={<SendIcon />}
        >
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
        <IconButton
          aria-label="send"
          color="success"
          size="small"
          disableRipple
          onClick={function () {
            alert("Hello");
          }}
        >
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
      >
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          color="warning"
          size="small"
          aria-label="Aignment button group"
        >
          <Button>Left</Button>
          <Button>Ceter</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Ceter</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="text">
          <Button>Left</Button>
          <Button>Ceter</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
        >
          <ToggleButton
            value="bold"
            aria-label="bold"
          >
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton
            value="italic"
            aria-label="italic"
          >
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton
            value="underlined"
            aria-label="underlined"
          >
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
