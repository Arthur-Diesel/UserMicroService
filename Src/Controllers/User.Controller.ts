import { Request, Response } from 'express'
import { hash } from 'bcrypt'
import { prisma } from '../Prisma'

async function login (req: Request, res: Response) {

}

export async function register (req: Request, res: Response) {
    try{
        req.body.password = await hash(req.body.password, 10)
        const newUser = await prisma.user.create({
            data: req.body
        })
        res.status(200).json({
            success: true,
            data: newUser
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err
        })
    }
}