import React from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function DatosPadres({ data }) {
  if (!data) {
    // Data is not available, render a loading state or an error message
    return <div>Loading...</div>;
  }
  const formaPago = {
    titulo: "FORMA DE PAGO ELEGIDA PARA LA MATRICULA 2024",
    datos: data.LEYENF1,
  };

  const datosFiliatorios = {
    titulo: "Datos Filiatorios",
    domicilio: data.VIVE_DOMM,
    telefono: data.VIVE_TELM,
    hermanos: data.hijos
      ? data.hijos.map((e) => " | " + e.APELLIDO + ", " + e.NOMBRE + " | ")
      : [],
  };

  const progenitoresResponsables = {
    progenitor1: {
      apellidoNombres: data.PADRE,
      parentesco: "data1",
      cuitCuilDni: data.DNI_P,
      domicilio: data.VIVE_DOMP,
      telefonoCelular: data.VIVE_TELP,
      email: data.MAILPADREP,
      emisionFacturas: "SI",
    },
    progenitor2: {
      apellidoNombres: data.MADRE,
      parentesco: "data1",
      cuitCuilDni: data.DNI_M,
      domicilio: data.VIVE_DOMM,
      telefonoCelular: data.VIVE_TELM,
      email: data.MAILMADREP,
      emisionFacturas: "NO",
    },
  };

  return (
    <Box>
      <TableContainer>
        <Table
          mt={5}
          ml={10}
          mr={10}
          mb={5}
          border={1}
          bgcolor="lightgray"
          pt={1}
        >
          <TableHead>
            <TableRow>
              <TableCell colSpan={4}>
                <strong>
                  <center>{formaPago.titulo}</center>
                </strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4}>
                <strong>
                  <center>{formaPago.datos}</center>
                </strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <TableContainer>
        <Table
          mt={5}
          ml={10}
          mr={10}
          mb={5}
          border={1}
          bgcolor="lightgray"
          pt={1}
        >
          <TableHead>
            <TableRow>
              <TableCell colSpan={4}>
                <strong>{datosFiliatorios.titulo}</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>
                  <center>DOMICILIO</center>
                </strong>
              </TableCell>
              <TableCell>
                <center>{datosFiliatorios.domicilio}</center>
              </TableCell>
              <TableCell>
                <strong>
                  <center>TELEFONO</center>
                </strong>
              </TableCell>
              <TableCell>
                <center>{datosFiliatorios.telefono}</center>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>
                <center>{datosFiliatorios.hermanos}</center>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <strong>PROGENITOR RESPONSABLE 1</strong>
              </TableCell>
              <TableCell>
                <strong>PROGENITOR RESPONSABLE 2</strong>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <strong>PROGENITOR RESPONSABLE 1</strong>
                  </TableCell>
                  <TableCell>
                    <strong>PROGENITOR RESPONSABLE 2</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Apellido y Nombres</TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor1.apellidoNombres}
                    </strong>
                  </TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor2.apellidoNombres}
                    </strong>
                  </TableCell>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                  <TableCell>CUIT /CUIL / DNI</TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor1.cuitCuilDni}
                    </strong>
                  </TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor2.cuitCuilDni}
                    </strong>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Domicilio</TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor1.domicilio}
                    </strong>
                  </TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor2.domicilio}
                    </strong>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Telefono Celular</TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor1.telefonoCelular}
                    </strong>
                  </TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor2.telefonoCelular}
                    </strong>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor1.email}
                    </strong>
                  </TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor2.email}
                    </strong>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Emisión de Facturas</TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor1.emisionFacturas}
                    </strong>
                  </TableCell>
                  <TableCell>
                    <strong>
                      {progenitoresResponsables.progenitor2.emisionFacturas}
                    </strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </TableContainer>
    </Box>
  );
}

export default DatosPadres;
