import { Input, InputLabel, Button, Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function MotherDataStep({ data, onSaveAndContinue }) {
  const [formData, setFormData] = useState(data[0] || {}); // Set initial state to an empty object

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveMotherData = async (formValues) => {
    try {
      console.log("datos de la madre", formValues);
      formValues.DNI_P = formValues.AFIP_NRODOC;
      await axios.post(
        "https://familias.colegiociudadjardin.edu.ar/api/v1/families/createOrUpdate",
        formValues
      );
      console.log("Data saved successfully");
      // Perform additional actions after saving mother's data
    } catch (error) {
      console.error(error);
    }
  };

  const inputs = [
    {
      label: "Apellido y Nombre",
      name: "MADRE",
      variant: "text",
    },
    {
      label: "Apellido Materno",
      name: "APE_MAT_M",
      variant: "text",
    },
    { label: "Ocupacion", name: "OCUMAD", variant: "text" },
    {
      label: "Fecha de Nacimiento",
      name: "FECHA_NM",
      variant: "date",
    },
    { label: "Domicilio", name: "VIVE_DOMM", variant: "text" },
    { label: "Telefono", name: "VIVE_TELM", variant: "tel" },
    {
      label: "Empresa / Trabajo",
      name: "TRABAJOM",
      variant: "text",
    },
    {
      label: "Domicilio Laboral",
      name: "TRAB_DOMM",
      variant: "text",
    },
    {
      label: "Telefono Laboral",
      name: "TRAB_TELM",
      variant: "tel",
    },
    {
      label: "Correo Electronico",
      name: "MAILMADREP",
      variant: "email",
    },
    { label: "DNI", name: "DNI_M", variant: "text" },
    { label: "", name: "AFIP_NRODOC", variant: "text" },
  ];

  const renderInputs = () => {
    return inputs.map((input) => {
      const fieldName = input.name.endsWith("P")
        ? input.name.replace(/P$/, "M")
        : input.name;

      let inputValue = formData[fieldName] || ""; // Set initial value to an empty string
      if (input.variant === "date" && typeof inputValue === "string") {
        inputValue = inputValue.split("T")[0]; // Extract the date portion
      }

      const inputStyle =
        input.name === "AFIP_NRODOC" ? { display: "none" } : {};

      return (
        <div key={input.name}>
          <InputLabel sx={{ textAlign: "left" }}>{input.label}</InputLabel>
          <Input
            name={fieldName}
            value={inputValue}
            onChange={handleChange}
            fullWidth
            type={input.variant}
            style={inputStyle}
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

      <Box gridColumn="span 2" textAlign="center" marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleSaveMotherData(formValues)}
          required
        >
          Guardar datos
        </Button>
      </Box>
    </Box>
  );
}

export default MotherDataStep;
