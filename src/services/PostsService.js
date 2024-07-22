import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService {
  async getPosts() {
    AppState.posts = []
    const response = await api.get(`api/posts`)
    const posts = response.data.posts.map((postPOJO) => new Post(postPOJO))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }
  async getPostsByProfileId(profileId) {
    AppState.posts = []
    const response = await api.get(`api/posts?creatorId=${profileId}`)
    const profilePosts = response.data.posts.map((post) => new Post(post))
    AppState.posts = profilePosts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }
  async changePage(pageNumber) {
    const response = await api.get(`api/posts?page=${pageNumber}`)
    logger.log(response.data)
    const posts = response.data.posts.map((post) => new Post(post))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }
  async changeProfilePage(pageNumber, routeId) {
    const response = await api.get(`api/posts?creatorId=${routeId}&page=${pageNumber}`)
    logger.log(response.data)
    const posts = response.data.posts.map((post) => new Post(post))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
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
  async likePost(postId) {
    const response = await api.post(`api/posts/${postId}/like`)
    const newPost = new Post(response.data)
    const postIndex = AppState.posts.findIndex((post) => post.id == postId)
    AppState.posts.splice(postIndex, 1, newPost)

  }
}


export const postsService = new PostsService