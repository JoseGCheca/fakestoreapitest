const axios = require("axios").default;

/**
 * Encapsulates axios requests
 */
export default class AxiosHttpClient {
  static async get(path, params = {}) {
    let response = {};
    try {
      response = await axios.get(path, { params: params });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
    return response;
  }

  static async post(path, body) {
    let response = {};
    try {
      response = await axios.post(path, body);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
    return response;
  }
}

