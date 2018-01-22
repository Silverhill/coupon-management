import axios from 'axios'
import config from '../environment';

class SessionApi {
  static login(credentials) {
    console.log(config);
    return axios({
      method:'post',
      url: `${config.API_URL}auth/local`,
      data: credentials
    });
  }
}

export default SessionApi;
