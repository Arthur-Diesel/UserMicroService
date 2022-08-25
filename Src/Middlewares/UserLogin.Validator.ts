import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

export const userLoginRules = () => {
    const notEmptyMessage = "can't be empty!"
    return [
        check('email').not().isEmpty().withMessage(`email ${notEmptyMessage}`),
        check('password').not().isEmpty().withMessage(`password ${notEmptyMessage}`)
    ]
}

export function validateUserLoginRequest (req: Request, res: Response, next: NextFunction){
    const errorsObject = validationResult(req)
    if(errorsObject.isEmpty()){
        return next
    } else {
        return res.status(400).json({success: false, errors: errorsObject.array})
    }
}