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
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function SonDataStep({ data, onSaveAndContinue }) {
  const [formData, setFormData] = useState([...data]);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        [name]: value,
      };
      return updatedData;
    });
  };

  const handleSaveAndContinue = () => {
    onSaveAndContinue(formData);
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
        MATRICULA: "",
        CURSO: "",
        DNI: "",
        FECHA_EGR1: "",
      },
    ]);
  };

  const renderInputs = () => {
    return formData.map((son, index) => {
      const inputs = [
        { label: "Nombre del Alumno", name: "NOMBRE", variant: "text" },
        { label: "Apellido", name: "APELLIDO", variant: "text" },
        { label: "Matricula", name: "MATRICULA", variant: "text" },
        { label: "Curso", name: "CURSO", variant: "text" },
        { label: "DNI", name: "DNI", variant: "number" },
        { label: "Fecha de Egreso", name: "FECHA_EGR1", variant: "date" },
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
                      <Input
                        size="small"
                        name={input.name}
                        value={inputValue}
                        onChange={(event) => handleChange(event, index)}
                        fullWidth
                        type={input.variant}
                      />
                    </ListItem>
                  );
                })}
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
          onClick={handleSaveAndContinue}
        >
          Guardar datos
        </Button>
      </Box>
    </Box>
  );
}

export default SonDataStep;
