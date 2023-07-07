import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const options = {
  Inicial: [
    { curso: "Sala de 1 año", value: "1AI" },
    { curso: "Sala de 2 años", value: "2AI" },
    { curso: "Sala de 3 años", value: "3AI" },
    { curso: "Sala de 4 años", value: "4AI" },
    { curso: "Sala de 5 años", value: "5AI" },
  ],
  Primario: [
    { curso: "1º Año", value: "1AP" },
    { curso: "2º Año", value: "2AP" },
    { curso: "3º Año", value: "3AP" },
    { curso: "4º Año", value: "4AP" },
    { curso: "5º Año", value: "5AP" },
    { curso: "6º Año", value: "6AP" },
  ],
  Secundario: [
    { curso: "1º Año", value: "1AS" },
    { curso: "2º Año", value: "2AS" },
    { curso: "3º Año", value: "3AS" },
    { curso: "4º Año", value: "4AS" },
    { curso: "5º Año", value: "5AS" },
    { curso: "6º Año", value: "6AS" },
  ],
};

const SelectComponent = ({ index, formData }) => {
  const [selectedOptions, setSelectedOptions] = useState(
    Array(formData.length).fill("")
  );
  const selectedOption = selectedOptions[index];

  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = value;
      return updatedOptions;
    });
  };

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel>Curso</InputLabel>
      <Select value={selectedOption} onChange={handleOptionChange}>
        {Object.entries(options).map(([section, values]) => [
          <MenuItem value={section} disabled key={section}>
            {section}
          </MenuItem>,
          ...values.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.curso}
            </MenuItem>
          )),
        ])}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
