import { server } from '..'
import request from 'supertest'

describe('POST /register', () => {
    test('Without Name, Email and Password', async () => {
        await request(server)
            .post('/api/register')
            .expect(400, {
                "success": false,
                "errors": [
                    "name: name can't be empty!",
                    "email: email can't be empty!",
                    "password: password can't be empty!"
                ]
            })
    })
    test('Without Email and Password', async () => {
        await request(server)
            .post('/api/register')
            .send({
                name: "teste",
            })
            .set('Accept', 'application/json')
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
            .post('/api/register')
            .send({
                name: "teste",
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