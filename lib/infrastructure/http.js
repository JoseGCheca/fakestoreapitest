const axios = require("axios").default;

class ApiHttp {
  async get(path, params = {}) {
    let response = {};
    try {
      response = await axios.get(path, { params: params });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
    return response;
  }

  async post(path, body) {
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

module.exports = ApiHttp;
