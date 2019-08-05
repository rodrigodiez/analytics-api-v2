import { App, AppOptions } from './app'

const { PORT, API_BASE_URL } = process.env
const appOptions: AppOptions = {
    ApiBaseUrl: API_BASE_URL || '',
}

App(appOptions).listen(PORT, () => {
    console.log(`Listening for connections on :${PORT}`)
})
