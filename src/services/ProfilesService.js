import { AppState } from "../AppState";
import { Profile } from "../models/Profile";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService"

class ProfilesService {

  async getProfileById(profileId) {
    AppState.profile = null
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log(response.data)
    const profile = new Profile(response.data)
    AppState.profile = profile
  }

  async searchProfiles(searchTerm) {
    const response = await api.get(`api/profiles?query=${searchTerm}`)
    const searchedProfiles = response.data.map((profile) => new Profile(profile))
    AppState.searchedProfiles = searchedProfiles
    logger.log(AppState.searchedProfiles)
  }
}

export const profilesService = new ProfilesService