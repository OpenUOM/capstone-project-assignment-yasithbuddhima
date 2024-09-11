const dbConnection = require("./sqlite");

dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");

const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

const readTeachers = async () => {
    const sql = `SELECT * FROM teacher`                         //ToDo -------------------------------DONE COMPLETED
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM teacher WHERE id = ?`           //ToDo ----------------------DONE COMPLETED 
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addTeacher = async (id, name, age) => {
    const sql = `INSERT INTO teacher(id,name,age) values (?, ?, ?)`   //ToDo -------------------------DONE COMPLETED
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[id, name, age])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateTeacher = async (name, age, id) => {
    const sql = `UPDATE teacher SET name=? , age=? WHERE id=?`         //ToDo -----------------------DONE COMPLETED
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[name, age, id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const deleteTeacher = async (id) => {
    const sql = `DELETE FROM teacher WHERE id=?`                   //ToDo -------------------DONE COMPLETED
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudents = async () => {
    const sql = `SELECT * FROM student`                 //ToDo ---------------DONE CHECK
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM student WHERE id=?`                   //ToDo ------------------DONE CHECK
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addStudent = async (id, name, age, religion) => {
    const sql = `INSERT INTO student(id, name, age, religion) values(?,?,?,?)`    //ToDo ------------------DONE CHECK
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[id, name, age, religion])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateStudent = async (name, age, religion, id) => {
    const sql = `UPDATE student SET name=? ,age=? WHERE id=?`        //ToDo -----------------DONE CHECK
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[name, age, religion, id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
} 

const deleteStudent = async (id) => {
    const sql = `DELETE FROM student WHERE id=?`                       //ToDo ----------------DONE CHECK
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql,[id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};
