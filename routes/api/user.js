const express = require('express');
const {getUserById, createUser, updateUser, deleteUser} = require('../../controllers/UserController.js')
const router = express.Router();


router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;