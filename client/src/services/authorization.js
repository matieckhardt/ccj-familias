const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api/v1";
const API_AUTH_URL = API_URL + "/auth";

export const handleLogin = async (userMail, userPassword) => {
  const data = { userMail, userPassword };

  const response = await fetch(API_AUTH_URL + "/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const jsonData = await response.json();

  if (jsonData.error) throw jsonData.error;

  const body = jsonData.body;

  const token = body;

  if (!token) throw response.json("Its necessary a token in the response");

  saveToken(token);

  return jsonData.message;
};

export const handleRegister = async (
  userName,
  userMail,
  userPassword,
  userAvatar,
  userImage
) => {
  const data = { userName, userMail, userPassword, userAvatar, userImage };

  const response = await fetch(API_AUTH_URL + "/register", {
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

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  localStorage.getItem("token");
};
