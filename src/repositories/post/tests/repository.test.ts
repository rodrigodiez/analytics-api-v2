import Koa from 'koa'
import Nock from 'nock'
import { Repository, Options } from '..'
import { mapFromApi, Post } from '../../../models/post/index'

describe('Repository', () => {
    let options: Options
    let repository: Repository

    beforeAll(() => {
        options = {
            apiBaseUrl: 'http://foo.bar',
        }
        repository = new Repository(options)
    })

    describe('getByUserId()', () => {
        let userId = 42

        it('should fetch the user posts from the API', async () => {
            userId = 42

            const apiCall = Nock(options.apiBaseUrl)
                .get(`/posts?userId=${userId}`)
                .reply(200)

            await repository.getByUserId(42)

            expect(apiCall.isDone()).toBe(true)
        })

        it('should transform and return the posts', async () => {
            const apiPosts = [
                {
                    userId: 1,
                    id: 1,
                    title:
                        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                    body:
                        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                },
            ]
            const apiCall = Nock(options.apiBaseUrl)
                .get('/posts?userId=*')
                .reply(200, apiPosts)

            const posts: Post[] = await repository.getByUserId(42)
        })
    })
})
