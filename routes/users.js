
  const usersRouter = require('express').Router();
  
  const {findAllUsers} = require('../middlewares/users');
  const {sendAllUsers} = require('../controllers/users');
  const {createUser} = require('../middlewares/users')
  const {sendUserCreated} = require('../controllers/users')
  const {findUserById} = require('../middlewares/users')
  const {sendUserByID} = require('../controllers/users')
  const {updateUser} = require('../middlewares/users')
  const {sendUserUpdated} = require('../controllers/users');
const {deleteUser} = require('../middlewares/users');
const {sendUserDeleted} = require('../controllers/users');
const {checkIsUserExists} = require("../middlewares/users")
const {checkEmptyNameAndEmailAndPassword} = require("../middlewares/users")
const {checkEmptyNameAndEmail} = require("../middlewares/users");
const {hashPassword} = require('../middlewares/users');
const {checkAuth} = require('../middlewares/auth');
const {sendMe} = require('../controllers/users');
  usersRouter.get('/users', findAllUsers, sendAllUsers);
  usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
  ); 
usersRouter.get("/users/:id", findUserById, sendUserByID);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
); 
usersRouter.get("/me", checkAuth, sendMe); 
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
  module.exports = usersRouter;
  