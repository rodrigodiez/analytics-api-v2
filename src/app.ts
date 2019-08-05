import Koa from 'koa'
import Router from 'koa-router'
import { get as getStatus } from './controllers/status'
import {
    getByUserId as getPostByUserId,
    ControllerOptions as PostControllerOptions,
} from './controllers/post'

type AppOptions = {
    ApiBaseUrl: string
}

function App(options: AppOptions) {
    const app = new Koa()
    const router = new Router()

    router.get('/status.json', getStatus())

    const postControllerOptions: PostControllerOptions = {
        apiBaseUrl: options.ApiBaseUrl,
    }
    router.get('/posts', getPostByUserId(postControllerOptions))

    app.use(router.routes())
    app.use(router.allowedMethods())

    return app
}

export { App, AppOptions }
