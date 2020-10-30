import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-7e36b.cloudfunctions.net/api'
  // baseURL: 'http://localhost:5001/clone-7e36b/us-central1/api'
  // baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;


