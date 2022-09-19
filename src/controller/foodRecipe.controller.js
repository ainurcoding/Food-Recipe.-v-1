const foodRecipe = require('../model/foodRecipe.model');

const foodRecipeController = {
    // methond
    listRecipe: (req, res) => {
        foodRecipe
            .selectAll()
            .then((results) => {
                res.json(results);
            }).catch((err) => {
                res.json(err);
            });
    },
    insertRecipe: (req, res) => {
        const { id_food_recipe, title, photo, ingredients, url_video, user_id } = req.body;
        foodRecipe
            .createRecipe(id_food_recipe, title, photo, ingredients, url_video, user_id)
            .then((results) => {
                res.json(results);
            }).catch((err) => {
                res.json(err);
            });
    },

    nameRecipe: (req, res) => {
        const getTitle = req.params.title;
        foodRecipe
            .searchRecipe(getTitle)
            .then((results) => {
                res.json(results);
            }).catch((err) => {
                res.json(err);
            });
    },
    detail: (req, res) => {
        const id = req.params.id;
        foodRecipe
            .selectDetail(id).then((results) => {
                res.json(results);
            }).catch((err) => {
                res.json(err)
            })
    },
    updateRecipe: (req, res) => {

        const { id_food_recipe, title, photo, ingredients, url_video, user_id } = req.body;
        foodRecipe
            .editRecipe(id_food_recipe, title, photo, ingredients, url_video, user_id)
            .then((results) => {
                res.json(results)
            }).catch((err) => {
                res.json(err)
            })
    },
    deleteRecipe: (req, res) => {
        const id = req.params.id;
        foodRecipe
            .delete(id)
            .then((results) => {
                res.json(results)
            }).catch((err) => {
                res.json(err)
            })
    },
    // implementation of pagination
    sortRecipe: (req, res) => {
        const currentPage = req.query.page || 1;
        const perPage = req.query.perPage || 2;
        const offset = (currentPage - 1) * perPage;
        foodRecipe
            .sorting(perPage, offset)
            .then((results) => {
                res.json(results)
            }).catch((err) => {
                res.json(err);
            })
    }

}


module.exports = foodRecipeController;
