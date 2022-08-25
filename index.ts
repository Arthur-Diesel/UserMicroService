import express, { Request, Response } from 'express'
export const server = express()
server.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'Hello from AuthMicroService!'})
})