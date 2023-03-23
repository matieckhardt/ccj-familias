import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { MenuItem } from '@mui/material';

const getFamilyData = async (email) => {
  const response = await fetch(`https://familias.colegiociudadjardin.edu.ar/api/v1/Familias/${email}`);
  const familyData = await response.json();
  return familyData;
}

const getStudentData = async (CODFAM) => {
  const response = await fetch(`https://familias.colegiociudadjardin.edu.ar/api/v1/Legajos/${CODFAM}`);
  const studentData = await response.json();
  return studentData;
}

const getCourseData = async (DNI) => {
  const response = await fetch(`https://familias.colegiociudadjardin.edu.ar/api/v1/alumnosCursos`);
  const courseData = await response.json();
  return courseData.filter(course => course.DNI === DNI);
}

const getAvailableWorkshops = async (studentData) => {
  const response = await fetch(`https://familias.colegiociudadjardin.edu.ar/api/v1/cupos/find/${studentData}`);
  const workshopsData = await response.json();
  return workshopsData;
}

const Form = () => {
  const [familyData, setFamilyData] = React.useState([]);
  const [studentData, setStudentData] = React.useState([]);
  const [courseData, setCourseData] = React.useState([]);
  const [workshopsData, setWorkshopsData] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const familyData = await getFamilyData('info@switchit.com.ar');
      console.log("familiy",familyData);
      const studentData = await getStudentData(familyData[0].CODFAM);
            console.log("student",studentData);

      const courseData = await getCourseData(studentData);
        console.log("curso",courseData);

      const workshopsData = await getAvailableWorkshops(courseData[0].CURSO);
        console.log("works",courseData);

      setFamilyData(familyData);
      setStudentData(studentData);
      setCourseData(courseData);
      setWorkshopsData(workshopsData);
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
      onChange={getStudentData}
      select
        id="family-name"
        label="Alumno"

      >
                {studentData.map(e => (
          <MenuItem key={e.id} value={e.id}>
            {e.NOMBRE + "," + e.APELLIDO}
          </MenuItem>
        ))}
              </TextField>

      <TextField
        id="workshop"
        label="Curso"
        select
        value={workshopsData.TALLER}
        SelectProps={{
          multiple: true
        }}
      >
        {workshopsData.map(workshop => (
          <option key={workshop.TALLER} value={workshop.TALLER}>
            {workshop.TALLER}
          </option>
        ))}
      </TextField>
      <Input
        id="course"
        label="Course"
        disabled
      />
      <TextField
        id="confirmation"
        label="Confirmation"
        select
        value={submitted ? 'yes' : 'no'}
        SelectProps={{
          multiple: false
        }}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </TextField>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Form;