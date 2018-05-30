// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "z8d39ts0ace43gs0",
    password: "io9ib07uaqcb4iy0",
    database: "bcxlvkz3s9cg0u0p"
  });
};

connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
