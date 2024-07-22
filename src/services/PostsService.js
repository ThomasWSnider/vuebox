import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService {
  async getPostsByAccountId() {
    const accountId = await AppState.account.id
    const response = await api.get(`api/posts?creatorId=${accountId}`)
    const profilePosts = response.data.posts.map((post) => new Post(post))
    AppState.posts = profilePosts
  }
  async getPosts() {
    AppState.posts = []
    const response = await api.get(`api/posts`)
    const posts = response.data.posts.map((postPOJO) => new Post(postPOJO))
    AppState.posts = posts
  }
  async getPostsByProfileId(profileId) {
    AppState.posts = []
    const response = await api.get(`api/posts?creatorId=${profileId}`)
    const profilePosts = response.data.posts.map((post) => new Post(post))
    AppState.posts = profilePosts
  }
  async makePost(editablePostData) {
    const response = await api.post(`api/posts`, editablePostData)
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