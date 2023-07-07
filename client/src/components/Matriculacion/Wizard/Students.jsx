import { Button, Box, Typography, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import SonDataForm from "./SonDataForm";

import axios from "axios";
function SonDataStep({ alumno, datosMhg }) {
  const [formData, setFormData] = useState([...alumno]);

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
    const hijos = {
      DNI_P: datosMhg.DNI_P,
      hijos: [...formData],
    };
    console.log(hijos);
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

  return (
    <Box pt={5} pl={20} pr={20} pb={10}>
      <Box textAlign="center" mt={2} mb={2}>
        {formData.map((son, index) => (
          <Box key={index}>
            <ListItem disablePadding>
              <Box
                width="100%"
                padding={1}
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              >
                <Button
                  fullWidth
                  pio
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
              </Box>
            </ListItem>

            <Typography
              variant="caption"
              sx={{ fontWeight: "bold", color: "#d8bc02" }}
            >
              {son.LEYENL2}
            </Typography>
            {son.LEYENL3 == 1 && (
              <Typography
                variant="caption"
                sx={{ fontWeight: "bold", color: "red" }}
              >
                Matriculación Bloqueada
              </Typography>
            )}
            <SonDataForm
              datosMhg={datosMhg}
              formData={formData}
              son={son}
              index={index}
              handleChange={handleChange}
              handleRemoveStudent={handleRemoveStudent}
            />
          </Box>
        ))}
        <Box p={1} textAlign="center">
          <Button
            variant="contained"
            color="warning"
            size="small"
            onClick={handleAddStudent}
          >
            Agregar Alumno
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSaveStudentsData}
          >
            Guardar datos
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SonDataStep;
