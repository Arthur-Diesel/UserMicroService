import express, { Request, Response } from 'express'
import UserRoutes from './Src/Routes/User.Routes'
export const server = express()

server.use(express.json())
server.use('/api', UserRoutes)

server.get('/', (req: Request, res: Response) => {
    res.status(200).json({success: true, message: 'Hello from AuthMicroService!'})
})