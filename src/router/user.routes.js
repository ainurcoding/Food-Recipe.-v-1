// declare express
const express = require('express');

// The following variables call several methods from the user controller
const { listUser, insertUser, nameUser, updateUser, detail, deleteUser, sortUser } = require('../controller/user.controller');
const { application } = require('express');

const app = express();
const cors = require('cors');



const router = express.Router();

router.get('/', cors(), (req, res) => {
    const data = 'test routes';
    res.json(data);
});

router
    // endpoint cannot be the same
    // router user
    /**
     * this path handles all user data
     */
    .get('/user', listUser)
    .get('/user/:name', nameUser)
    .get('/user/id/:id', detail)
    .post('/user', insertUser)
    .put('/user/update', updateUser)
    .delete('/user/delete/:id', deleteUser)
    .get('/sort', sortUser);

module.exports = router;
