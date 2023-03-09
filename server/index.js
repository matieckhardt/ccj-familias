require("dotenv").config();
const app = require("./app");
require("./database");
const initConnectionDatabase = require("./databaseSql");

app.listen(app.get("PORT"), () => {
  console.log(`Server on port: http://localhost:${app.get("PORT")}`);
  initConnectionDatabase();
});
