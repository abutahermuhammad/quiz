/** @format */
import { Paper, Stack, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const Question = ({
  id,
  className,
  heading,
  brief,
  yesValue,
  noValue,
  onChange
}) => {
  return (
    <>
      <Paper className={className} elevation={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <div>
            <Typography variant="h4" gutterBottom component="h3">
              {heading}
            </Typography>
            <Typography variant="caption" gutterBottom>
              {brief}
            </Typography>
          </div>

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              onChange={(e) => onChange(id, e.target.value)}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value={yesValue}
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel
                value={noValue}
                control={<Radio />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Paper>
    </>
  );
};

export default Question;
