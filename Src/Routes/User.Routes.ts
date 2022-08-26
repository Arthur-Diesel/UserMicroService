import { router } from '.'
import { userLoginRules, validateUserLoginRequest } from '../Middlewares/UserLogin.Validator'
import { register } from '../Controllers/User.Controller'

/*
router.post('/login', 
    userLoginRules(), 
    validateUserLoginRequest,
    login)
*/

router.post('/login', 
    userLoginRules(), 
    validateUserLoginRequest,
    register)