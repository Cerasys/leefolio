import request from 'axios'

class UtilsApi {
  static loadNotionContent = (pageId) => {
    const apiCompletionPromise = request({
      method: 'GET',
      url: `https://notion-api.splitbee.io/v1/page/${pageId}`,
    })
    return apiCompletionPromise
  }
}

export default UtilsApi
