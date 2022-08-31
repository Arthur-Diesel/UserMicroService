import { Request, Response } from 'express'
import { hash, compare } from 'bcrypt'
import { prisma } from '../Prisma'
import { sign } from 'jsonwebtoken'
import 'dotenv/config'

export async function login (req: Request, res: Response) {
    try{
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            }
        })
        if(!user){
            return res.status(400).json({success: false, error: 'Invalid email!'})
        }
        if(await compare(req.body.password, user.password)){
            const token = await sign({ uid: user.id }, String(process.env.SECRET))
            return res.status(200).json({success: true, token})
        } else {
            return res.status(400).json({success: false, error: 'Invalid password!'})
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err
        })
    }
}

export async function register (req: Request, res: Response) {
    try{
        req.body.password = await hash(req.body.password, 10) 
        const newUser = await prisma.user.create({
            data: req.body
        }) 
        return res.status(200).json({
            success: true,
            data: newUser.id
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err
        })
    }
}