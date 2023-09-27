import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import AppAppBar from "../modules/views/AppAppBar";
import AppFooter from "../modules/views/AppFooter";
import withRoot from "../modules/withRoot";
import Box from "@mui/material/Box";

function ErrorRadios() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Select an option");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "a") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "b") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else if (value === "c") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else if (value === "d") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} error={error} variant="standard">
            <FormLabel id="demo-error-radios">Who will win BA'24</FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="a"
                control={<Radio />}
                label="ashke"
              />
              <FormControlLabel
                value="b"
                control={<Radio />}
                label="Ashke"
              />
              <FormControlLabel
                value="c"
                control={<Radio />}
                label="no one"
              />
              <FormControlLabel
                value="d"
                control={<Radio />}
                label="hehe"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
              Check Answer
            </Button>
          </FormControl>
        </form>
      </Box>
      <AppFooter />
    </React.Fragment>
  );
}
export default withRoot(ErrorRadios);
