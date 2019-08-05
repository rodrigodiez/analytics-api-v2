import request from 'supertest'
import { Server } from 'http'
import { App, AppOptions } from '../../app'

const appOptions: AppOptions = {
    ApiBaseUrl: 'https://jsonplaceholder.typicode.com',
}
const server = App(appOptions).listen()

describe('GET /posts', () => {
    afterAll(() => {
        server.close()
    })

    describe('GET /posts?userId=xxx', () => {
        it('should return a 200 status response', async () => {
            const response = await request(server).get('/status.json')
            expect(response.status).toEqual(200)
        })

        it('should return an application/json response', async () => {
            const response = await request(server).get('/status.json')
            expect(response.type).toEqual('application/json')
        })
    })
})
