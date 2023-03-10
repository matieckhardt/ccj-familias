const API_URL = process.env.REACT_APP_API_URL || "http://localhost:80/api/v1";
const API_AUTH_URL = API_URL;

export const handleDelete = async (id) => {
  const data = { id };

  const response = await fetch(API_AUTH_URL + "/cupos/delete/" + id, {
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
