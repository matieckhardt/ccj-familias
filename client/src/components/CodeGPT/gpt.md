using React and Material UI, i need you to write me a code that has a form with 3 Textfields type "select", one Input and one "submit" button

// conditions

 using this given email: "info@switchit.com.ar"

we need to fetch using params

first array of objects: the family data from "https://familias.colegiociudadjardin.edu.ar/api/v1/Familias/" + email

values to be used :
    NOMBRE,
      APELLIDO,
      DNI,
      MATRICULA,
      CODEFAM,

2nd array of objects :  every student of the familiy: "https://familias.colegiociudadjardin.edu.ar/api/v1/Legajos/" + CODEFAM


3rd array of objects:  the value CURSO of every student :   using the value DNI form the 2nd array, filter  the array obtained from this url "https://familias.colegiociudadjardin.edu.ar/api/v1/alumnosCursos"

4th array of ojects: using the value CURSO obtained in the 3rd array. use params to fetch from this uri  "https://familias.colegiociudadjardin.edu.ar/api/v1/cupos/find/" every "TALLER" that is available for the selected student


TextField 1:
has to be populated with the values "APELLIDO", "NOMBRE" from first array.

TextField 2: 
has to be populated with the values "TALLER" thar are available.

Input
The value must be "CURSO" obtained in the 2nd array

textField 3:

2 options: "yes or no"



