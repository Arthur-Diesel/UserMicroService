import { check } from 'express-validator'
import { notEmptyMessage, userBaseRules } from './User.Validator'

export const userRegisterRules = () => {
    return [
        check('name').not().isEmpty().withMessage(`name ${notEmptyMessage}`),
        ...userBaseRules()
    ]
}