import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

export const userRegisterRules = () => {
    const notEmptyMessage = "can't be empty!"
    return [
        check('name').not().isEmpty().withMessage(`name ${notEmptyMessage}`),
        check('email').not().isEmpty().withMessage(`email ${notEmptyMessage}`),
        check('password').not().isEmpty().withMessage(`password ${notEmptyMessage}`)
    ]
}

export function validateUserRegisterRequest (req: Request, res: Response, next: NextFunction){
    const errorsObject = validationResult(req)
    if(errorsObject.isEmpty()){
        return next
    } else {
        return res.status(400).json({success: false, errors: errorsObject.array})
    }
}