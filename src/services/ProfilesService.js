import { AppState } from "../AppState";
import { Profile } from "../models/Profile";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService"

class ProfilesService {

  async getProfileById(profileId) {
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log(response.data)
    const profile = new Profile(response.data)
    AppState.profile = profile
  }
}

export const profilesService = new ProfilesService