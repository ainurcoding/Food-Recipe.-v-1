// declare db
const db = require('../config/db');

const userModel = {
    // router model list
    selectAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tb_user ORDER by id_user ASC', (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    },

    // user create user
    createUser: (id_user, img, email, password, name) => {
        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO tb_user 
                (id_user, img, email, password, name)
            VALUES
            (${id_user}, '${img}', '${email}', '${password}', '${name}')`,
                (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
        });
    },

    // router spesifik search

    // usahakan parameter didalamnya jangan sama dengan nama field table   
    searchUser: (getName) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM tb_user where name ILIKE '%${getName}%'`,
                (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
        });
    },
    // by id
    selectDetail: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM tb_user where id_user=${id}`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    },
    editUser: (id_user, img, email, password, name) => {

        return new Promise((resolve, reject) => {
            db.query(`UPDATE tb_user SET 
          img = '${img}', 
          email = '${email}', 
          password = '${password}', 
          name = '${name}' 
          WHERE 
          id_user = ${id_user}`,
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM tb_user WHERE id_user = ${id}`,
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
        })
    },
    // implementation of pagination
    sorting: (perPage, offset) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM tb_user order by id_user ASC LIMIT ${perPage} OFFSET ${offset}`,
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
        })
    }
};
module.exports = userModel;
