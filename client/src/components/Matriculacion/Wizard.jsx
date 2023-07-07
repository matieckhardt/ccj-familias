import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
import WelcomeStep from "./Wizard/Welcome";
import FatherDataStep from "./Wizard/Father";
import MotherDataStep from "./Wizard/Mother";
import SonDataStep from "./Wizard/Students";
import PricesStep from "./Wizard/Prices";
import ContractsView from "./Wizard/Contracts";

const steps = [
  "Inicio ",
  "Confirmar Responsable I",
  "Confirmar Responsable II",
  "Datos de los Alumnos",
  "Forma de Pago",
  "Reglamentos y Contratos",
];
const SERVERURI = "https://familias.colegiociudadjardin.edu.ar/api/v1/";

function Wizard() {
  const [user, setUser] = React.useState([]);
  const [datosMhg, setDatos] = React.useState([]);
  const [alumno, setAlumno] = React.useState([]);
  const [familias, setFamilias] = React.useState([]);

  const getUserData = async function (res, req) {
    const token = JSON.stringify(localStorage.token);
    const response = await fetch(
      SERVERURI + "/auth/user/profile?token=" + token
    );

    const objeto = await response.json();
    setUser(objeto);

    const data = await fetch(SERVERURI + "Familias/" + objeto.userMail);
    const datosMhg = await data.json();
    setDatos(datosMhg[0] || "Vacio");

    const alumnos = await fetch(SERVERURI + "Legajos/" + datosMhg[0].CODFAM);

    const alumnoData = await alumnos.json();
    setAlumno(alumnoData);

    const dataSaved = await fetch(SERVERURI + "families/" + datosMhg[0].DNI_P);
    const familias = await dataSaved.json();
    setFamilias(familias || "Vacio");
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed - show contracts here</p>
            {/* Render the contracts and download links */}
          </div>
        ) : (
          <div>
            {/* Render the appropriate component based on the active step */}
            {activeStep === 0 && <WelcomeStep />}
            {activeStep === 1 && <FatherDataStep data={[datosMhg]} />}
            {activeStep === 2 && <MotherDataStep data={[datosMhg]} />}
            {activeStep === 3 && (
              <SonDataStep alumno={alumno} datosMhg={datosMhg} />
            )}
            {activeStep === 4 && <PricesStep data={[datosMhg]} />}
            {activeStep === 5 && (
              <ContractsView data={[datosMhg]} datosCargados={familias} />
            )}

            {/* ... */}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={
                  activeStep !== 0 &&
                  !Object.values(datosMhg[activeStep - 1] || {}).every(
                    (value) => Boolean(value)
                  )
                }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
}

export default Wizard;
