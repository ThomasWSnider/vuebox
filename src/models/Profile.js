export class Profile {
  constructor(data) {
    this.id = data.id || data._id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.class = data.class
    this.graduated = data.graduated
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }
}
