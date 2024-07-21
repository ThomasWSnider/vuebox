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
  async getPostsByProfileId(profileId) {
    const response = await api.get(`api/posts?creatorid=${profileId}`)
    logger.log(response.data)
  }
  async makePost(editablePostData) {
    const response = await api.post(`api/posts`, editablePostData)
    logger.log(`New post!!`, response.data)
    const newPost = new Post(response.data)
    AppState.posts.unshift(newPost)
  }

  async deletePost(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    logger.log(response.data)
    const postIndex = AppState.posts.findIndex((post) => postId == post.id)
    AppState.posts.splice(postIndex, 1)
  }
}


export const postsService = new PostsService