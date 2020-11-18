import axios from "axios"

const instance = axios.create ({
    baseURL : 'https://us-central1-clone-ffdd7.cloudfunctions.net/api'
});

export default instance;

// 'http://localhost:5001/clone-ffdd7/us-central1/api