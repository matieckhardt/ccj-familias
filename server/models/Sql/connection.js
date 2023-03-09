const { mysql } = require("../../config");
const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  port: mysql.port,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
