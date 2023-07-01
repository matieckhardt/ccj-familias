import { Typography, Box } from "@mui/material";

// Separate component for each step
function WelcomeStep() {
  return (
    <>
      <Box pt={5} pl={20} pr={20} pb={10}>
        <Typography variant="h4" gutterBottom="true" padding={5}>
          Solicitud de Reserva de Vacante 2024
        </Typography>
        <Typography paragraph="true" gutterBottom="true" align="center">
          <strong>ALUMNOS NUEVOS</strong> <br />A fin de verificar la edad del
          alumno y su correspondencia con el curso/sala al cual se inscribe, se
          les solicitará adjuntar una foto del frente del DNI para completar
          este formulario. En caso de solicitar pase desde otro establecimiento,
          también deberá adjuntar constancia de Libre Deuda del establecimiento
          de origen con antigüedad menor a 30 días.<br></br>
        </Typography>
        <Typography
          paragraph="true"
          gutterBottom="true"
          align="center"
          paddingBottom={10}
        >
          <strong>
            Considere tener disponible esta documentación antes de comenzar a
            completar el formulario
          </strong>
        </Typography>
      </Box>
    </>
  );
}

export default WelcomeStep;
