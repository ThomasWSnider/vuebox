export class Post {
  constructor(data) {
    this.id = data.id || data._id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.createdAt = data.createdAt
    this.updatedAt = data.createdAt
    this.creator = data.creator
  }
}
