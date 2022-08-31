import { router } from '.'
import { userBaseRules } from '../Middlewares/UserValidator'
import { userRegisterRules } from '../Middlewares/UserRegisterValidator'
import { validateUserRequest } from '../Middlewares/UserValidator'
import { register, login } from '../Controllers/UserController'

router.post('/register',
    userRegisterRules(), 
    validateUserRequest,
    register)

router.post('/login', 
    userBaseRules(),
    validateUserRequest,
    login)

export default router