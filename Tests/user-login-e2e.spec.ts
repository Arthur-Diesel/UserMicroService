import { server } from '..'
import request from 'supertest'

describe('POST /login', () => {
    test('Without Email and Password', async () => {
        await request(server)
            .post('/api/login')
            .expect(400, {
                "success": false,
                "errors": [
                    "email: email can't be empty!",
                    "password: password can't be empty!"
                ]
            })
    })
    test('Without Password', async () => {
        await request(server)
            .post('/api/login')
            .send({
                email: "teste@teste.com"
            })
            .set('Accept', 'application/json')
            .expect(400, {
                "success": false,
                "errors": [
                    "password: password can't be empty!"
                ]
            })
    })
})