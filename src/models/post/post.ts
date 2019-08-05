export type ApiPost = {
    userId: number
    id: number
    title: string
    body: string
}

export type Post = {
    id: number
    title: string
    body: string
    user: PostUser
}

export type PostUser = {
    id: number
}

export function mapFromApi(apiPost: ApiPost): Post {
    return {
        id: apiPost.id,
        title: apiPost.title,
        body: apiPost.body,
        user: {
            id: apiPost.userId,
        },
    }
}
