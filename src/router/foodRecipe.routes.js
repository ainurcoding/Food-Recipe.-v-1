// declare express
const express = require('express');

// The following variables call several methods from the user controller
const { listRecipe, insertRecipe, nameRecipe, updateRecipe, detail, deleteRecipe, sortRecipe } = require('../controller/foodRecipe.controller.js');

const router = express.Router();

router.get('/', (req, res) => {
    const data = 'test routes';
    res.json(data);
});

router
    // endpoint cannot be the same
    // router user
    /**
     * this path handles all user data
     */
    .get('/foodRecipe', listRecipe)
    .get('/foodRecipe/:title', nameRecipe)
    .get('/foodRecipe/id/:id', detail)
    .get('/foodRecipe-sort', sortRecipe)
    .post('/foodRecipe1/insert', insertRecipe)
    .put('/foodRecipe/update', updateRecipe)
    .delete('/foodRecipe/delete/:id', deleteRecipe);

module.exports = router;
