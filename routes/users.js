const express = require('express')

const {register, login, getUser} = require('../controllers/users')
const {authenticate, authorize} = require('../middlewares/auth')

const router = express.Router({mergeParams:true});

router.route('/').post(register).get(authenticate, authorize('r'), getUser)
router.route('/login').post(login)

module.exports = router 
