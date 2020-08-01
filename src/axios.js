import axios from 'axios'

const instance = axios.create({
  baseURL: "https://sustainhill.firebaseio.com/",
});

export default instance;