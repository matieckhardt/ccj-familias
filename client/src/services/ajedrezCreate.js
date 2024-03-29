const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://familias.colegiociudadjardin.edu.ar/api/v1";
const API_AUTH_URL = API_URL;

export const handleRegister = async (nombre, curso, taller) => {
  const data = { nombre, curso, taller };
  const response = await fetch(API_AUTH_URL + "/ajedrez/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const reg = await response.json();

  if (reg.error) throw reg.error.message;

  return reg.message;
};
