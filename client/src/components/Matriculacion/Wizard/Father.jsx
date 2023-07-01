import { Input, InputLabel, Button, Box } from "@mui/material";
import { useState } from "react";

function FatherDataStep({ data, onSaveAndContinue }) {
  const [formData, setFormData] = useState(data[0]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveAndContinue = () => {
    onSaveAndContinue(formData);
  };

  const renderInputs = () => {
    const inputs = [
      { label: "Apellido y Nombre", name: "PADRE", variant: "text" },
      { label: "Apellido Materno", name: "APE_MAT_P", variant: "text" },
      { label: "Ocupacion", name: "OCUPAD", variant: "text" },
      { label: "Nacionalidad", name: "NACIONAL", variant: "text" },
      { label: "DNI", name: "DNI_P", variant: "number" },
      { label: "Fecha de Nacimiento", name: "FECHA_NP", variant: "date" },
      { label: "Domicilio", name: "VIVE_DOMP", variant: "text" },
      { label: "Telefono", name: "VIVE_TELP", variant: "tel" },
      { label: "Empresa / Trabajo", name: "TRABAJOP", variant: "text" },
      { label: "Domicilio Laboral", name: "TRAB_DOMP", variant: "text" },
      { label: "Telefono Laboral", name: "TRAB_TELP", variant: "tel" },
      { label: "Correo Electronico", name: "MAILPADREP", variant: "email" },
    ];

    return inputs.map((input) => {
      let inputValue = formData[input.name];

      if (input.variant === "date" && typeof inputValue === "string") {
        inputValue = inputValue.split("T")[0]; // Extract the date portion
      }
      return (
        <div key={input.name}>
          <InputLabel sx={{ textAlign: "left" }}>{input.label}</InputLabel>
          <Input
            size="small"
            name={input.name}
            defaultValue={inputValue}
            onChange={handleChange}
            fullWidth
            type={input.variant}
          />
        </div>
      );
    });
  };

  return (
    <Box
      pt={5}
      pl={20}
      pr={20}
      pb={10}
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gap={2}
    >
      {renderInputs()}
      <Box gridColumn="span 2" textAlign="center">
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleSaveAndContinue}
        >
          Guardar datos
        </Button>
      </Box>
    </Box>
  );
}

export default FatherDataStep;
