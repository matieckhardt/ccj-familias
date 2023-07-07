import React from "react";
import { FormControl, Typography, Input } from "@mui/material";
import axios from "axios";

const handleImageUpload = async (event, index, formData) => {
  const file = event.target.files[0];
  console.log("formdata", formData);
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

const FileUploadInput = ({ index, formData }) => {
  return (
    <FormControl fullWidth>
      <br />
      <Typography align="left">
        Por favor adjunte foto de frente del DNI
      </Typography>
      <input
        size="small"
        type="file"
        accept="image/jpeg, image/png"
        onChange={(event) => handleImageUpload(event, index, formData)}
      />
    </FormControl>
  );
};

export default FileUploadInput;
