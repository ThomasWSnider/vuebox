import { AppState } from "../AppState"
import { PaidGraphic } from "../models/PaidGraphic"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PaidGraphicsService {
  async getPaidGraphics() {
    const response = await api.get(`api/ads`)
    logger.log(response.data)
    const paidGraphics = response.data.map((paidGraphicPOJO) => new PaidGraphic(paidGraphicPOJO))
    AppState.paidGraphics = paidGraphics
  }

}

export const paidGraphicsService = new PaidGraphicsService