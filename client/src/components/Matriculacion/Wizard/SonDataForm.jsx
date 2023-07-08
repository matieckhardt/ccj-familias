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

import React, { useState } from "react";

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
  const [selectedCurso, setSelectedCurso] = useState("");

  const inputs = [
    { label: "Nombre del Alumno:", name: "NOMBRE", variant: "text" },
    { label: "Apellido del Alumno:", name: "APELLIDO", variant: "text" },
    { label: "Fecha de Nacimiento:", name: "FECHA_NAC", variant: "date" },
    { label: "Documento de Identidad:", name: "DNI", variant: "number" },
    {
      label: "Curso a Matricular:",
      name: "CURSO",
      variant: "text",
      readOnly: true,
      display: "none",
    },
  ];
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name !== "CURSO") {
      handleChange(index, name, value);
    }
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
                fontSize: "15px",
                fontWeight: "bold",
                textTransform: "uppercase",
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
              readOnly={input.readOnly}
              sx={{
                display: input.display,
                marginBottom: "10px",
                fontSize: "15px",
                textTransform: "uppercase",
              }}
            />
          </ListItem>
        );
      })}
      {son.PLANCUO == 2 && <FileUploadInput formData={formData} />}

      <SelectComponent
        handleChange={handleChange}
        formData={formData}
        selectedCurso={selectedCurso}
        setSelectedCurso={setSelectedCurso}
      />
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
