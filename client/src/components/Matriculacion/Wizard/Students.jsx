import {
  Input,
  InputLabel,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Typography,
  FormControl,
  Select,
  MenuItem,
  ListSubheader,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

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

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  console.log("cursoSelected", selectedOption);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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

function SonDataStep({ alumno, datosMhg }) {
  const [formData, setFormData] = useState([...alumno]);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [formComplete, setFormComplete] = useState(false);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    let updatedData; // Declare the updatedData variable
    setFormData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        [name]: value,
      };
      return updatedData;
    });

    // Check form completion
    const isFormComplete = updatedData.every(
      (student) =>
        student.NOMBRE &&
        student.APELLIDO &&
        student.CURSO &&
        student.DNI &&
        student.FECHA_NAC
    );
    setFormComplete(isFormComplete);
  };

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleAddStudent = () => {
    setFormData((prevData) => [
      ...prevData,
      {
        NOMBRE: "",
        APELLIDO: "",
        CURSO: "",
        DNI: "",
        FECHA_NAC: "",
      },
    ]);
  };

  const handleRemoveStudent = (index) => {
    setFormData((prevData) => {
      const updatedData = [...prevData];
      updatedData.splice(index, 1);
      return updatedData;
    });
  };

  const handleSaveStudentsData = async () => {
    if (alumno.LEYENL3) {
      // Block saving data
      console.log("Cannot save data. alumno.LEYEND3 has a value.");
      return;
    }
    const hijos = {
      DNI_P: datosMhg.DNI_P,
      hijos: [...formData],
    };

    try {
      console.log("datos del padre");
      await axios.post(
        "https://familias.colegiociudadjardin.edu.ar/api/v1/families/createOrUpdate",
        hijos
      );
      console.log("Data saved successfully");
      // Perform additional actions after saving father's data
    } catch (error) {
      console.error(error);
    }
  };

  const renderInputs = () => {
    return formData.map((son, index) => {
      const inputs = [
        { label: "Nombre del Alumno", name: "NOMBRE", variant: "text" },
        { label: "Apellido", name: "APELLIDO", variant: "text" },
        { label: "DNI", name: "DNI", variant: "number" },
        { label: "Fecha de nacimiento", name: "FECHA_NAC", variant: "date" },
      ];

      const isExpanded = expandedIndex === index;
      console.log("alumno", alumno);
      return (
        <ListItem key={index} disablePadding>
          <Box
            width="100%"
            padding={1}
            sx={{
              backgroundColor: isExpanded ? "transparent" : "transparent",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          >
            <Button
              fullWidth
              onClick={() => handleToggle(index)}
              endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                textDecoration: "none",
                color: "#000000",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Alumno {index + 1}
              </Typography>
            </Button>

            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <List disablePadding>
                {inputs.map((input) => {
                  let inputValue = son[input.name];

                  if (
                    input.variant === "date" &&
                    typeof inputValue === "string"
                  ) {
                    inputValue = inputValue.split("T")[0]; // Extract the date portion
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

                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {alumno.LEYENL2}
                      </Typography>
                      <Input
                        size="small"
                        name={input.name}
                        value={inputValue}
                        onChange={(event) => handleChange(event, index)}
                        fullWidth
                        type={input.variant}
                        required
                      />
                    </ListItem>
                  );
                })}
                <SelectComponent></SelectComponent>
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
            </Collapse>
          </Box>
        </ListItem>
      );
    });
  };

  return (
    <Box pt={5} pl={20} pr={20} pb={10}>
      <List>{renderInputs()}</List>
      <Box textAlign="center" mt={2} mb={2}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleAddStudent}
        >
          Agregar Alumno
        </Button>
      </Box>
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleSaveStudentsData}
          disabled={!formComplete}
        >
          Guardar datos
        </Button>
      </Box>
    </Box>
  );
}

export default SonDataStep;
