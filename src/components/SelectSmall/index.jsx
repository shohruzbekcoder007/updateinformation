import * as React from "react";
import { useMemo } from "react";
import codes from "../../codes.json";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

export default function CustomizedSelects({ content_table_id, selectedOption, changeSelect }) {

  const [age, setAge] = React.useState(selectedOption || "");
  const handleChange = (event) => {
    setAge(event.target.value);
    changeSelect(event.target.value);
  };

  const options = useMemo(() => {
    return codes.Z1.find( (element) => element.content_table_id == content_table_id ).answers;
  }, []);

  return (
      <FormControl style={{maxWidth: 300}} variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={""}>
            <em>None</em>
          </MenuItem>
          {options.map((option) => {
            return (
              <MenuItem value={option.id} key={option.id}>
                {option.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
  );
}
