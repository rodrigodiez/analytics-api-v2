import Koa from 'koa'
import { get  } from '../'

describe('status', () => {
    const controller = get()

    let ctx: Koa.Context

    beforeAll(() => {
        ctx = {} as Koa.Context
    })

    it('should set ctx.body to an object with status OK', () =>{
        controller(ctx)
        expect(ctx.body).toEqual({status: "OK"})
    })
})
