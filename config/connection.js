// Set up MySQL connection.
var mysql = require("mysql");


// mysql://bc48b0fe56007b:13aa3a16@us-cdbr-east-05.cleardb.net/heroku_f98466972273d45?reconnect=true


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpass",
  database: "burgers_db"
});

var connectionHeroku = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  port: 3306,
  user: "bc48b0fe56007b",
  password: "13aa3a16",
  database: "heroku_f98466972273d45"
});


// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
module.exports = connectionHeroku;
