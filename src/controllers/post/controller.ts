import * as Koa from 'koa'
import Axios from 'axios'
import { Controller } from '..'

function getByUserId(options: ControllerOptions): Controller {
    return async (ctx: Koa.Context) => {
        const { userId } = ctx.query

        try {
            await Axios.get(`${options.apiBaseUrl}/posts?userId=${userId}`)
        } catch (err) {
            ctx.throw(404)
        }
    }
}

type ControllerOptions = {
    apiBaseUrl: string
}

export { getByUserId, ControllerOptions }
