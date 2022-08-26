import { router } from '.'
import { userBaseRules } from '../Middlewares/User.Validator'
import { userRegisterRules } from '../Middlewares/UserRegister.Validator'
import { validateUserRequest } from '../Middlewares/User.Validator'
import { register, login } from '../Controllers/User.Controller'

router.post('/register',
    userRegisterRules(), 
    validateUserRequest,
    register)

router.post('/login', 
    userBaseRules(),
    validateUserRequest,
    login)

export default router