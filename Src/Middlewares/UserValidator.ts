import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

export const notEmptyMessage = "can't be empty!"

export const userBaseRules = () => {
    return [
        check('email').not().isEmpty().withMessage(`email ${notEmptyMessage}`),
        check('password').not().isEmpty().withMessage(`password ${notEmptyMessage}`)
    ]
}

export function validateUserRequest (req: Request, res: Response, next: NextFunction){
    const errorsObject = validationResult(req)
    if(errorsObject.isEmpty()){
        return next()
    } else {
        // @ts-ignore
        const { errors } = errorsObject
        // @ts-ignore
        const errorsArray = errors.map(error => `${error.param}: ${error.msg}` )
        return res.status(400).json({success: false, errors: errorsArray})
    }
}