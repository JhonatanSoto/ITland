module.exports = {
  development: {
    username: "root",
    password: "1234qwerty::",
    database: "itland",
    host: "127.0.0.1",
    dialect: "mysql",
    port: "3300",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
