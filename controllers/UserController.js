const User = require('../models/User.js');

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);

    res.status(200).json({user})

  } catch (error) {
    res.status(500).json({err})
  }
};

const createUser = (req, res) => {
  const {name, username, email} = req.body;
  const newUser = new User({
    name,
    username,
    email
  });

  newUser.save()
    .then(user => {
      res.status(201).json({user})
    })
    .catch(err => {
      res.status(500).json({err})
    })
}

// update user 

const updateUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body)
    .then(user => {
      res.status(200).json({user});
    })
    .catch(err => {
      res.status(500).json({err})
    })
}

const deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      res.status(204).json({user})
    })
    .catch(err => {
      res.status(500).json({err})
    })
}


module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser
}