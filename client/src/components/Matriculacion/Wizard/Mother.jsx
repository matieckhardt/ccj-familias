import { Input, InputLabel, Button, Box } from "@mui/material";
import { useState } from "react";

function MotherDataStep({ data, onSaveAndContinue }) {
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
      { label: "Apellido y Nombre", name: "MADRE", variant: "text" },
      { label: "Apellido Materno", name: "APE_MAT_M", variant: "text" },
      { label: "Ocupacion", name: "OCUMAD", variant: "text" },
      { label: "Fecha de Nacimiento", name: "FECHA_NM", variant: "date" },
      { label: "Domicilio", name: "VIVE_DOMM", variant: "text" },
      { label: "Telefono", name: "VIVE_TELM", variant: "tel" },
      { label: "Empresa / Trabajo", name: "TRABAJOM", variant: "text" },
      { label: "Domicilio Laboral", name: "TRAB_DOMM", variant: "text" },
      { label: "Telefono Laboral", name: "TRAB_TELM", variant: "tel" },
      { label: "Correo Electronico", name: "MAILMADREP", variant: "email" },
    ];

    return inputs.map((input) => {
      const fieldName = input.name.endsWith("P")
        ? input.name.replace(/P$/, "M")
        : input.name;

      let inputValue = formData[fieldName];
      if (input.variant === "date" && typeof inputValue === "string") {
        inputValue = inputValue.split("T")[0]; // Extract the date portion
      }

      return (
        <div key={input.name}>
          <InputLabel sx={{ textAlign: "left" }}>{input.label}</InputLabel>
          <Input
            name={fieldName}
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
      <Box gridColumn="span 2" textAlign="center" marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleSaveAndContinue}
          required
        >
          Guardar datos
        </Button>
      </Box>
    </Box>
  );
}

export default MotherDataStep;
