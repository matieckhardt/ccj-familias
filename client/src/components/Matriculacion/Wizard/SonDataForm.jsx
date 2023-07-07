import {
  Input,
  Button,
  Box,
  List,
  ListItem,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";

import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import SelectComponent from "./SelectComponent";
import FileUploadInput from "./FileUploadInput";

const SonDataForm = ({
  son,
  index,
  onSaveAndContinue,
  handleToggle,
  handleRemoveStudent,
  handleChange,
  formData,
  datosMhg,
}) => {
  const inputs = [
    { label: "Nombre del Alumno", name: "NOMBRE", variant: "text" },
    { label: "Apellido", name: "APELLIDO", variant: "text" },
    { label: "DNI", name: "DNI", variant: "number" },
    { label: "Fecha de nacimiento", name: "FECHA_NAC", variant: "date" },
  ];
  console.log("students fdata", formData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleChange(index, name, value);
  };

  return (
    <List disablePadding>
      {inputs.map((input) => {
        let inputValue = son[input.name];

        if (input.variant === "date" && typeof inputValue === "string") {
          inputValue = inputValue.split("T")[0];
        }

        return (
          <ListItem key={input.name} disablePadding>
            <Typography
              variant="subtitle2"
              sx={{
                marginRight: "8px",
                whiteSpace: "nowrap",
              }}
            >
              {input.label}
            </Typography>

            <Input
              size="small"
              name={input.name}
              value={inputValue}
              onChange={handleInputChange}
              fullWidth
              type={input.variant}
              required
            />
          </ListItem>
        );
      })}
      {son.PLANCUO == 2 && <FileUploadInput formData={formData} />}

      <SelectComponent formData={formData} />

      <Box textAlign="right" mt={1}>
        <IconButton
          aria-label="Remove"
          onClick={() => handleRemoveStudent(index)}
        >
          <Typography>Eliminar</Typography>
          <DeleteIcon />
        </IconButton>
      </Box>
    </List>
  );
};

export default SonDataForm;
