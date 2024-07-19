import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService {
  async getPosts() {
    const response = await api.get(`api/posts`)
    logger.log(`Got the Posts!`, response.data)
    const posts = response.data.posts.map((postPOJO) => new Post(postPOJO))
    AppState.posts = posts
  }

}

export const postsService = new PostsService