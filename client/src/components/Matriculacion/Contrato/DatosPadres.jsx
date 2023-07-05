import {
  Paper,
  Typography,
  List,
  ListItemText,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function DatosPadres() {
  return (
    <Box>
      <TableContainer>
        <Table
          mt={5}
          ml={10}
          mr={10}
          mb={5}
          border={1}
          borderColor={"black"}
          bgcolor={"lightgray"}
          pt={1}
        >
          <TableHead>
            <TableCell colSpan={4}>
              <strong>
                <center>FORMA DE PAGO ELEGIDA PARA LA MATRICULA 2024</center>
              </strong>
            </TableCell>
          </TableHead>
          <TableRow>
            <TableCell colSpan={4}>
              <strong>
                <center>los datos</center>
              </strong>
            </TableCell>
          </TableRow>
        </Table>
        <br></br>
        <Table
          mt={5}
          ml={10}
          mr={10}
          mb={5}
          border={1}
          borderColor={"black"}
          bgcolor={"lightgray"}
          pt={1}
        >
          <TableRow>
            <TableCell colSpan={4}>
              <strong>Datos Filiatorios</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>
                <center>DOMICILIO</center>
              </strong>
            </TableCell>
            <TableCell>
              <center>el dom</center>
            </TableCell>
            <TableCell>
              <strong>
                <center>TELEFONO</center>
              </strong>
            </TableCell>
            <TableCell>
              <center>1234135</center>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>
              <strong>
                <center>
                  HERMANOS DEL ALUMNO QUE CONCURREN o CONCURRIERON AL
                  ESTABLECIMIENTO
                </center>
              </strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>
              <center>datos hermanos</center>
            </TableCell>
          </TableRow>
        </Table>
        <br></br>
        <Table>
          <TableRow>
            <TableCell colSpan={1}>
              <center></center>
            </TableCell>
            <TableCell colSpan={1}>
              <strong>PROGENITOR RESPONSABLE 1</strong>
            </TableCell>
            <TableCell colSpan={1}>
              <strong>PROGENITOR RESPONSABLE 1</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>Apellido y Nombres</TableCell>
            <TableCell colSpan={1}>
              <strong>data1</strong>
            </TableCell>
            <TableCell colSpan={1}>
              <strong>data 2</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>PARENTESCO</TableCell>
            <TableCell colSpan={1}>
              <strong>data1</strong>
            </TableCell>
            <TableCell colSpan={1}>
              <strong>data 2</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>CUIT /CUIL / DNI</TableCell>
            <TableCell colSpan={1}>
              <strong>data1</strong>
            </TableCell>
            <TableCell colSpan={1}>
              <strong>data 2</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>DOMICILIO</TableCell>
            <TableCell colSpan={1}>
              <strong>data1</strong>
            </TableCell>
            <TableCell colSpan={1}>
              <strong>data 2</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>TELEFONO CELULAR</TableCell>
            <TableCell colSpan={1}>
              <strong>data1</strong>
            </TableCell>
            <TableCell colSpan={1}>
              <strong>data 2</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>EMAIL</TableCell>
            <TableCell colSpan={1}>
              <strong>data1</strong>
            </TableCell>
            <TableCell colSpan={1}>
              <strong>data 2</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>EMISION DE FACTURAS</TableCell>
            <TableCell colSpan={1}>
              <strong>data1</strong>
            </TableCell>
            <TableCell colSpan={1}>
              <strong>data 2</strong>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DatosPadres;
