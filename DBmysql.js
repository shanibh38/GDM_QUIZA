var mysql = require('mysql');
const fs = require('fs');

var con = mysql.createConnection({
  host: "quizagdm.coxqxrjsrdck.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "admingdma",
  database: "gdma"
});

function createA() {

  con.connect(function (err) {
    if (err) {
      fs.appendFileSync('./logA.txt', "Error Connecting to GDMA DB - " + err.message + "\n");
    }
    else {
      fs.appendFileSync('./logA.txt', "Connecting to GDMA DB\n");
    }
    con.query("CREATE TABLE IF NOT EXISTS UsersA (userName varchar(10) PRIMARY KEY, age integer, gender varchar(7),education varchar(50), bonus varchar(5))", function (err, result) {
      if (err) {
        fs.appendFileSync('./logA.txt', "Error create Quiz1A - " + err.message + "\n");
      }
      else {
        fs.appendFileSync('./logA.txt', "Table UsersA created\n");
      }
    });
    con.query(`CREATE TABLE IF NOT EXISTS Quiz1A (userName varchar(10) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
      firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
      firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,firstBox5Rate integer,firstBox6Rate integer,
      secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,secondBox5Rate integer,secondBox6Rate integer,
      resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          fs.appendFileSync('./logA.txt', "Error create Quiz1A - " + err.message + "\n");
        }
        else {
          fs.appendFileSync('./logA.txt', "Table Quiz1A created\n");
        }
      });
    con.query(`CREATE TABLE IF NOT EXISTS Quiz2A (userName varchar(10) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
      firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
      firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,firstBox5Rate integer,firstBox6Rate integer,
      secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,secondBox5Rate integer,secondBox6Rate integer,
      resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          fs.appendFileSync('./logA.txt', "Error create Quiz2A - " + err.message + "\n");
        }
        else {
          fs.appendFileSync('./logA.txt', "Table Quiz2A created\n");
        }
      });
    con.query(`CREATE TABLE IF NOT EXISTS Quiz3A (userName varchar(10) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
      firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
      firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,firstBox5Rate integer,firstBox6Rate integer,
      secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,secondBox5Rate integer,secondBox6Rate integer,
      resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          fs.appendFileSync('./logA.txt', "Error create Quiz3A - " + err.message + "\n");
        }
        else {
          fs.appendFileSync('./logA.txt', "Table Quiz3A created\n");
        }
      });
    con.query(`CREATE TABLE IF NOT EXISTS BQ12A (userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
      resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          fs.appendFileSync('./logA.txt', "Error create BQ12A - " + err.message + "\n");
        }
        else {
          fs.appendFileSync('./logA.txt', "Table BQ12A created\n");
        }
      });
    con.query(`CREATE TABLE IF NOT EXISTS BQ23A (userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
      resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          fs.appendFileSync('./logA.txt', "Error create BQ23A - " + err.message + "\n");
        }
        else {
          fs.appendFileSync('./logA.txt', "Table BQ23A created\n");
        }
      });
  });

  //con.end();
}


function getUsersA(callback) {
  con.connect(function (err) {
    if (err) {
      fs.appendFileSync('./logA.txt', "Error Connecting to GDMA DB - " + err.message + "\n");
    }
    else {
      fs.appendFileSync('./logA.txt', "Connecting to GDMA DB\n");
    }
    let sql = `SELECT userName From UsersA`;
    con.query(sql, function (err, result) {
      if (err) {
        fs.appendFileSync('./logA.txt', "Error return users from 'getUsersA' function - " + err.message + "\n");
      }
      else {
        fs.appendFileSync('./logA.txt', "Successed return users from 'getUsersA' function\n");
        callback(null, result);
      }
    });
  });
  //con.end();
}

function insertUsersA(userName, age, gender, education) {

  con.connect(function (err) {
    if (err) {
      fs.appendFileSync('./logA.txt', "Error Connecting to GDMA DB - " + err.message + "\n");
    }
    else {
      fs.appendFileSync('./logA.txt', "Connecting to GDMA DB\n");
    }
    let sql = `INSERT INTO UsersA (userName ,age , gender ,education)
    VALUES  (?,?,?,?)`;
    con.query(sql, [userName, age, gender, education], function (err, result) {
      if (err) {
        fs.appendFileSync('./logA.txt', "Error close DB from 'insertUsersA' function - " + err.message + "\n");
        console.log("fail");
      }
      else {
        console.log("suc");
        fs.appendFileSync('./logA.txt', "Successed insertion user from 'insertUsersA' function\n");
      }
    });
  });

}



module.exports = { createA, getUsersA,insertUsersA };
