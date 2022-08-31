import express, { Request, Response } from 'express'
import cors from 'cors'
import UserRoutes from './Src/Routes/UserRoutes'
export const server = express()

server.use(cors())
server.use(express.json())
server.use('/api', UserRoutes)

server.get('/', (req: Request, res: Response) => {
    res.status(200).json({success: true, message: 'Hello from UsersMicroService!'})
})