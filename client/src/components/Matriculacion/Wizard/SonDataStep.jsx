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
import React, { useState, useEffect } from "react";
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

function SonDataStep({ alumno, datosMhg }) {
  const [formData, setFormData] = useState([...alumno]);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [formComplete, setFormComplete] = useState(false);
  const [alumnoMoroso, setAlumnoMoroso] = useState();

  const [selectedOptions, setSelectedOptions] = useState(
    Array(formData.length).fill("")
  );

  const SelectComponent = ({ index }) => {
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

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    let updatedData;
    setFormData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        [name]: value,
      };
      return updatedData;
    });

    const isFormComplete = updatedData.every(
      (student) =>
        student.NOMBRE.trim() !== "" &&
        student.APELLIDO.trim() !== "" &&
        student.CURSO.trim() !== "" &&
        student.DNI.trim() !== "" &&
        student.FECHA_NAC.trim() !== ""
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

  const handleImageUpload = async (event, index) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("dni", formData[index].DNI);

    try {
      await axios.post(
        "https://familias.colegiociudadjardin.edu.ar/api/v1/dniUpload/uploadImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully");
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
            <Typography
              variant="caption"
              sx={{ fontWeight: "bold", color: "#d8bc02" }}
            >
              {son.LEYENL2}
            </Typography>
            <p></p>

            {son.LEYENL3 == 1 && (
              <Typography
                variant="caption"
                sx={{ fontWeight: "bold", color: "red" }}
              >
                Matriculación Bloqueada
              </Typography>
            )}
            {son.PLANCUO == 2 && (
              <FormControl fullWidth>
                <Typography>Foto Frente DNI</Typography>
                <input
                  size="small"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={(event) => handleImageUpload(event, index)}
                />
              </FormControl>
            )}
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <List disablePadding>
                {inputs.map((input) => {
                  let inputValue = son[input.name];

                  if (
                    input.variant === "date" &&
                    typeof inputValue === "string"
                  ) {
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
                        onChange={(event) => handleChange(event, index)}
                        fullWidth
                        type={input.variant}
                        required
                      />
                    </ListItem>
                  );
                })}

                <ListItem disablePadding>
                  <SelectComponent index={index} />
                </ListItem>
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
    </Box>
  );
}

export default SonDataStep;
