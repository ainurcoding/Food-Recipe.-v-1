// declare db
const db = require('../config/db');

const foodRecipe = {
    // router model list
    selectAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tb_food_recipe', (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    },

    // user create user
    createRecipe: (id_recipe_food, title, photo, ingredients, url_video, user_id) => {
        return new Promise((resolve, reject) => {
            db.query(
                `insert into tb_food_recipe
                (id_food_recipe, title, photo, ingredients, url_video, user_id)
                VALUES
                (${id_recipe_food}, '${title}','${photo}','${ingredients}','${url_video}',${user_id})`,
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
    searchRecipe: (title) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM tb_food_recipe where title ILIKE '%${title}%'`,
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
            db.query(`SELECT * FROM tb_food_recipe where id_food_recipe=${id}`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            })
        })
    },
    editRecipe: (id_food_recipe, title, photo, ingredients, url_video, user_id) => {

        return new Promise((resolve, reject) => {
            db.query(`UPDATE tb_food_recipe SET title = '${title}', photo = '${photo}', ingredients = '${ingredients}', url_video = '${url_video}', user_id = ${user_id}
          WHERE id_food_recipe = ${id_food_recipe}`,
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
            db.query(`DELETE FROM tb_food_recipe WHERE id_food_recipe = ${id}`,
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
            db.query(`SELECT * FROM  tb_food_recipe ORDER BY id_food_recipe ASC LIMIT ${perPage} OFFSET ${offset}`,
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
module.exports = foodRecipe;
