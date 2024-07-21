import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Profile.js').Profile} user info from the database*/
  profile: null,
  /** @type {import('./models/Post.js').Post[]} user info from the database*/
  posts: [],
  /** @type {import('./models/PaidGraphic.js').PaidGraphic[]} user info from the database*/
  paidGraphics: []
})