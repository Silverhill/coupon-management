import axios from 'axios'

class SessionApi {
  static login(credentials) {
    return axios({
      method:'post',
      url:'http://localhost:3000/v1/auth/local',
      data: credentials
    });
  }
}

export default SessionApi;
