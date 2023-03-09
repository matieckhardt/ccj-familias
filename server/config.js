module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/usuarios",
  PORT: process.env.PORT || 4000,
  secretKey: process.env.SECRET_KEY || "myUltraSecretKey",
  expiresInJWT: process.env.EXPIRE_JWT || "1h",
  expiresInCookie: process.env.EXPIRE_COOKIE || 24 * 60 * 60 * 1000, // 24 hours
  nameCookie: process.env.NAME_COOKIE || "token",
  cookieSecretKey: process.env.COOKIE_SECRET_KEY || "cookieSecretKey",
  mysql: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
