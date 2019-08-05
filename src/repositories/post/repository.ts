import Axios from 'axios'
import { Post, ApiPost, mapFromApi } from '../../models/post'

export type Options = {
    apiBaseUrl: string
}

export class Repository {
    options: Options
    constructor(options: Options) {
        this.options = options
    }

    async getByUserId(userId: number): Promise<Post[]> {
        const response = await Axios.get(
            `${this.options.apiBaseUrl}/posts?userId=${userId}`
        )
        const apiPosts = response.data as ApiPost[]

        return apiPosts.map(mapFromApi)
    }
}
