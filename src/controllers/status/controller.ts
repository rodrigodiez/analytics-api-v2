import * as Koa from 'koa'
import { Controller } from '..'

function get(): Controller {
    return async (ctx: Koa.Context) => {
        ctx.status = 200
        ctx.body = { status: 'OK' }
    }
}

export { get }
