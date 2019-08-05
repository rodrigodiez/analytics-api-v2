import Koa from 'koa'
import Nock from 'nock'
import Sinon from 'sinon'
import { Controller } from '../..';
import { getByUserId, ControllerOptions  } from '../'

describe('status', () => {
    let options:ControllerOptions;
    let controller:Controller
    let userId:number;
    let ctx: Koa.Context
    let ctxThrowSpy: Sinon.SinonSpy;

    beforeAll(() => {
        ctxThrowSpy = Sinon.spy()
        userId = 42
        options = {
            apiBaseUrl: 'http://foo.bar'
        }
        ctx = {
            query: {
                userId: userId
            },
            throw: ctxThrowSpy
        } as unknown as Koa.Context
        controller = getByUserId(options);
    })

    it('should fetch the posts from the API using the userId provided in the query', async () =>{
        userId = 42;
        ctx.query.userId = userId;

        const apiCall = Nock(options.apiBaseUrl).get(`/posts?userId=${userId}`).reply(200);
        await controller(ctx);
        expect(apiCall.isDone()).toBe(true)
    })


    it('should throw 404 in ctx if API returns 404', async () => {
        const apiCall = Nock(options.apiBaseUrl).get(`/posts?userId=${userId}`).reply(404);
        await controller(ctx);
        expect(ctxThrowSpy.calledWith(404))
    })
})
