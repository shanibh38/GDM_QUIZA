const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

function createA() {

    let db = new sqlite3.Database('./GDMA.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error Connecting to GDMA DB - " + err.message + "\n");
            //  console.error(err.message);
        }
        else {
            fs.appendFileSync('./logA.txt', "Connecting to GDMA DB\n");
        }
    });
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS UsersA " +
            "( userName varchar(10) PRIMARY KEY, age integer, gender varchar(7),education varchar(50), bonus varchar(5))");
        db.run(`CREATE TABLE IF NOT EXISTS Quiz1A ` +
            `(userName varchar(10) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
            firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
            firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,firstBox5Rate integer,firstBox6Rate integer,
            secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,secondBox5Rate integer,secondBox6Rate integer,
            resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
        db.run(`CREATE TABLE IF NOT EXISTS BQ12A ` +
            `(userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
        resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
        db.run(`CREATE TABLE IF NOT EXISTS Quiz2A ` +
            `(userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
        firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
        firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,firstBox5Rate integer,firstBox6Rate integer,
        secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,secondBox5Rate integer,secondBox6Rate integer,
        resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
        db.run(`CREATE TABLE IF NOT EXISTS BQ23A ` +
            `(userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
        resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
        db.run(`CREATE TABLE IF NOT EXISTS Quiz3A ` +
            `(userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
        firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
        firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,firstBox5Rate integer,firstBox6Rate integer,
        secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,secondBox5Rate integer,secondBox6Rate integer,
        resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
    });
    db.close((err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error GDMA connection closed - " + err.message + "\n");
            //console.error(err.message);
        }
        else {
            fs.appendFileSync('./logA.txt', "GDMA connection closed\n");
            //console.log('GDMI connection closed.');
        }
    });

}

function getUsersA(callback) {
    let db = new sqlite3.Database('./GDMA.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error open DB from 'getUsersA' function - " + err.message + "\n");
            //            console.error(err.message);
        }
        else {
            fs.appendFileSync('./logA.txt', "open DB from 'getUsersA' function\n");
            // console.log("open DB from 'getUsers' function");
        }
    });
    let sql = `SELECT userName From UsersA`;
    db.serialize(function () {
        db.all(sql, (err, rows) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error return users from 'getUsersA' function - " + err.message + "\n");
                // console.log(err);
            }
            else {
                fs.appendFileSync('./logA.txt', "Successed return users from 'getUsersA' function\n");
                // console.log("Successed return users from 'getUsers' function");
                callback(null, rows);
            }
        });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error closeDB from 'getUsersA' function - " + err.message + "\n");
                //console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "close DB from 'getUsersA' function\n");
                // console.log("close DB from 'getUsers' function");
            }
        });
    });
}

function insertUsersA(userName, age, gender, education) {
    let db = new sqlite3.Database('./GDMA.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error open DB from 'insertUsersA' function - " + err.message + "\n");
            // console.error(err.message);
        }
        else {
            fs.appendFileSync('./logA.txt', "open DB from 'insertUsersA' function\n");
            // console.log("open DB from 'insertUsers' function");
        }
    });
    let sql = `INSERT INTO UsersA (userName ,age , gender ,education)
                VALUES  (?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, age, gender, education], (err, res) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error insertion user from 'insertUsersA' function - " + err.message + "\n");
                //return console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "Successed insertion user from 'insertUsersA' function\n");
                // console.log("Successed insertion user from 'insertUsers' function");
            }
        });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error close DB from 'insertUsersA' function - " + err.message + "\n");
                // console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "close DB from 'insertUsersA' function\n");
                //  console.log("close DB from 'insertUsers' function");
            }
        });
    });
}


function insertQuiz1A(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
    forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
    firstBox5Rate, firstBox6Rate, secondBox1Rate, secondBox2Rate,
    secondBox3Rate, secondBox4Rate, secondBox5Rate, secondBox6Rate,
    resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMA.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error open DB from 'insertQuiz1A' function - " + err.message + "\n");
            //  console.error(err.message);
        }
        else {
            fs.appendFileSync('./logA.txt', "open DB from 'insertQuiz1A' function\n");
            //  console.log("open DB from 'insertQuiz1A' function");
        }
    });
    let sql = `INSERT INTO Quiz1A (userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        firstBox5Rate, firstBox6Rate, secondBox1Rate, secondBox2Rate,
        secondBox3Rate, secondBox4Rate, secondBox5Rate, secondBox6Rate,
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
                VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
            forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
            firstBox5Rate, firstBox6Rate, secondBox1Rate, secondBox2Rate,
            secondBox3Rate, secondBox4Rate, secondBox5Rate, secondBox6Rate,
            resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
                if (err) {
                    fs.appendFileSync('./logA.txt', "Error insertion Quiz1A details from 'insertQuiz1A' function - " + err.message + "\n");
                    //  return console.error(err.message);
                }
                else {
                    fs.appendFileSync('./logA.txt', "Successed insertion Quiz1A details from 'insertQuiz1A' function\n");
                    // console.log("Successed insertion Quiz1A details from 'insertQuiz1A' function");
                }
            });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error close DB from 'insertQuiz1A' function - " + err.message + "\n");
                //console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "close DB from 'insertQuiz1A' function\n");
                //  console.log("close DB from 'insertQuiz1A' function");
            }
        });
    });
}

function insertBQ12A(userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMA.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error open DB from 'insertBQ12A' function - " + err.message + "\n");
            //console.error(err.message);
        }
        else {
            fs.appendFileSync('./logA.txt', "open DB from 'insertBQ12A' function\n");
            //console.log("open DB from 'insertBQ12A' function");
        }
    });
    let sql = `INSERT INTO BQ12A (userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
                VALUES  (?,?,?,?,?,?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error insertion BQ12A details from 'insertBQ12A' function - " + err.message + "\n");
                //return console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "Successed insertion BQ12A details from 'insertBQ12A' function\n");
                // console.log("Successed insertion BQ12A details from 'insertBQ12A' function");
            }
        });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error close DB from 'insertBQ12A' function - " + err.message + "\n");
                // console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "close DB from 'insertBQ12A' function\n");
                // console.log("close DB from 'insertBQ12A' function");
            }
        });
    });
}

function insertQuiz2A(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
    forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
    firstBox5Rate, firstBox6Rate, secondBox1Rate, secondBox2Rate,
    secondBox3Rate, secondBox4Rate, secondBox5Rate, secondBox6Rate,
    resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMA.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error open DB from 'insertQuiz2A' function - " + err.message + "\n");
            // console.error(err.message);
        }
        else {
            fs.appendFileSync('./logA.txt', "open DB from 'insertQuiz2A' function\n");
            //  console.log("open DB from 'insertQuiz2A' function");
        }
    });
    let sql = `INSERT INTO Quiz2A (userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        firstBox5Rate, firstBox6Rate,  secondBox1Rate, secondBox2Rate,
        secondBox3Rate, secondBox4Rate, secondBox5Rate, secondBox6Rate,
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
                VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
            forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
            firstBox5Rate, firstBox6Rate, secondBox1Rate, secondBox2Rate,
            secondBox3Rate, secondBox4Rate, secondBox5Rate, secondBox6Rate, 
            resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
                if (err) {
                    fs.appendFileSync('./logA.txt', "Error insertion Quiz2A details from 'insertQuiz2A' function - " + err.message + "\n");
                    //return console.error(err.message);
                }
                else {
                    fs.appendFileSync('./logA.txt', "Successed insertion Quiz2A details from 'insertQuiz2A' function\n");
                    // console.log("Successed insertion Quiz2A details from 'insertQuiz2A' function");
                }
            });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error close DB from 'insertQuiz2A' function - " + err.message + "\n");
                // console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "close DB from 'insertQuiz2A' function\n");
                // console.log("close DB from 'insertQuiz2A' function");
            }
        });
    });
}

function insertBQ23A(userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMA.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error open DB from 'insertBQ23A' function - " + err.message + "\n");
            //   console.error(err.message);
        }
        else {
            fs.appendFileSync('./logA.txt', "open DB from 'insertBQ23A' function\n");
            //console.log("open DB from 'insertBQ23A' function");
        }
    });
    let sql = `INSERT INTO BQ23A (userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
                VALUES  (?,?,?,?,?,?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error insertion BQ23A details from 'insertBQ23A' function - " + err.message + "\n");
                //return console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "Successed insertion BQ23A details from 'insertBQ23A' function\n");
                // console.log("Successed insertion BQ23A details from 'insertBQ23A' function");
            }
        });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error close DB from 'insertBQ23A' function - " + err.message + "\n");
                //console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "close DB from 'insertBQ23A' function\n");
                //console.log("close DB from 'insertBQ23A' function");
            }
        });
    });
}

function insertQuiz3A(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
    forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
    firstBox5Rate, firstBox6Rate, secondBox1Rate, secondBox2Rate,
    secondBox3Rate, secondBox4Rate, secondBox5Rate, secondBox6Rate,
    resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMA.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error open DB from 'insertQuiz3A' function - " + err.message + "\n");
            //console.error(err.message);
        }
        else {
            fs.appendFileSync('./logA.txt', "open DB from 'insertQuiz3A' function\n");
            // console.log("open DB from 'insertQuiz3A' function");
        }
    });
    let sql = `INSERT INTO Quiz3A (userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        firstBox5Rate, firstBox6Rate,  secondBox1Rate, secondBox2Rate,
        secondBox3Rate, secondBox4Rate, secondBox5Rate, secondBox6Rate,
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
                VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
            forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
            firstBox5Rate, firstBox6Rate, secondBox1Rate, secondBox2Rate,
            secondBox3Rate, secondBox4Rate, secondBox5Rate, secondBox6Rate,
            resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
                if (err) {
                    fs.appendFileSync('./logA.txt', "Error insertion Quiz3A details from 'insertQuiz3A' function - " + err.message + "\n");
                    // return console.error(err.message);
                }
                else {
                    fs.appendFileSync('./logA.txt', "Successed insertion Quiz3A details from 'insertQuiz3A' function\n");
                    //console.log("Successed insertion Quiz3A details from 'insertQuiz3A' function");
                }
            });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error close DB from 'insertQuiz3A' function - " + err.message + "\n");
                // console.error(err.message);
            }
            else {
                fs.appendFileSync('./logA.txt', "close DB from 'insertQuiz3A' function\n");
                //console.log("close DB from 'insertQuiz3A' function");
            }
        });
    });
}

function updateBonusA(bonus, userName){
    
    let db = new sqlite3.Database('./GDMA.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error open DB from 'updateBonusA' function - " + err.message + "\n");
        }
        else {
            fs.appendFileSync('./logA.txt', "open DB from 'updateBonusA' function\n");
        }
    });
    let sql = `UPDATE UsersA SET bonus = ? WHERE userName = ?`;
    db.serialize(function () {
        db.run(sql, [bonus, userName], (err, row) => {
                if (err) {
                    fs.appendFileSync('./logA.txt', "Error update Users bonus from 'updateBonusA' function - " + err.message + "\n");
                }
                else {
                    fs.appendFileSync('./logA.txt', "Successed update Users bonus from 'updateBonusA' function\n");
                }
            });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logA.txt', "Error close DB from 'updateBonusA' function - " + err.message + "\n");
            }
            else {
                fs.appendFileSync('./logA.txt', "close DB from 'updateBonusA' function\n");
            }
        });
    });
}

module.exports = { updateBonusA, createA,  getUsersA,  insertUsersA,  insertQuiz1A, insertQuiz2A, insertQuiz3A, insertBQ12A, insertBQ23A};

