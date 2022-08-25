import { server } from '..'
import request from 'supertest'

describe('Express Application', () => {
    test('GET /', async () => {
        await request(server)
            .get('/')
            .expect(200, {
                "message":"Hello from AuthMicroService!"
            })
    })
})