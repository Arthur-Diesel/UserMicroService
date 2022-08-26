import { server } from '..'
import request from 'supertest'

describe('Express Application', () => {
    test('GET /', async () => {
        await request(server)
            .get('/')
            .expect(200, {
                "success": true,
                "message":"Hello from AuthMicroService!"
            })
    })
})