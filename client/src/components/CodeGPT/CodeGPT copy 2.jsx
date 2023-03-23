import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

const MyForm = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(
        "https://familias.colegiociudadjardin.edu.ar/api/v1/Familias/info@switchit.com.ar"
      );
      const studentsData = await response.json();
      setStudents(studentsData);
    };
    fetchStudents();
  }, []);

  const handleStudentChange = async (event) => {
    const studentId = event.target.value;
    setSelectedStudent(studentId);

    const fetchCourses = async () => {
      const response = await fetch(
        `https://familias.colegiociudadjardin.edu.ar/api/v1/Legajos/${studentId}`
      );
      const coursesData = await response.json();
      setCourses(coursesData);
    };
    fetchCourses();
  };

  const handleCourseChange = async (event) => {
    const courseId = event.target.value;
    setSelectedCourse(courseId);

    const fetchWorkshops = async () => {
      const response = await fetch(
        `https://familias.colegiociudadjardin.edu.ar/api/v1/cupos/find/${courseId}`
      );
      const workshopsData = await response.json();
      setWorkshops(workshopsData);
    };
    fetchWorkshops();
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Select a student:
      </Typography>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="select-student-label">Student</InputLabel>
        <Select
          labelId="select-student-label"
          id="select-student"
          value={selectedStudent}
          onChange={handleStudentChange}
          label="Student"
        >
          {students.map((student) => (
            <MenuItem key={student.CODFAM} value={student.CODFAM}>
              {student.APELLIDO}, {student.NOMBRE}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {courses.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom>
            Select a course:
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="select-course-label">Course</InputLabel>
            <Select
              labelId="select-course-label"
              id="select-course"
              value={selectedCourse}
              onChange={handleCourseChange}
              label="Course"
            >
              {courses.map((course) => (
                <MenuItem key={course.CURSO} value={course.CURSO}>
                  {course.CURSO}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}

      {workshops.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom>
            Available workshops:
          </Typography>
          <ul>
            {workshops.map((workshop) => (
              <li key={workshop.ID}>
                {workshop.DESCRIPCION} ({workshop.CANTIDAD_DISPONIBLE}{" "}
                available)
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default MyForm;
