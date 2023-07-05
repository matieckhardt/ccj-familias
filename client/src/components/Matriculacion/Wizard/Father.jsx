import { Input, InputLabel, Button, Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function FatherDataStep({ data, onSaveAndContinue }) {
  const [formData, setFormData] = useState(data[0]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveFatherData = async (formValues) => {
    try {
      console.log("datos del padre");
      await axios.post(
        "https://familias.colegiociudadjardin.edu.ar/api/v1/families/createOrUpdate",
        formValues
      );
      console.log("Data saved successfully");
      // Perform additional actions after saving father's data
    } catch (error) {
      console.error(error);
    }
  };

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

  const renderInputs = () => {
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
            value={inputValue}
            onChange={handleChange}
            fullWidth
            type={input.variant}
          />
        </div>
      );
    });
  };
  const formValues = {};
  for (const input of inputs) {
    formValues[input.name] = formData[input.name] || "";
  }

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
          onClick={() => handleSaveFatherData(formValues)} // Use an arrow function or wrap in an anonymous function
        >
          Guardar datos
        </Button>
      </Box>
    </Box>
  );
}

export default FatherDataStep;
