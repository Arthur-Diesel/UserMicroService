import { router } from '.'
import { userBaseRules } from '../Middlewares/User.validator'
import { userRegisterRules } from '../Middlewares/UserRegister.validator'
import { validateUserRequest } from '../Middlewares/User.validator'
import { register, login } from '../Controllers/User.controller'

router.post('/register',
    userRegisterRules(), 
    validateUserRequest,
    register)

router.post('/login', 
    userBaseRules(),
    validateUserRequest,
    login)

export default router