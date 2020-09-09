import axios from 'axios';

const instance = axios.create({
    baseURL:'https://filedrop-fa092.firebaseio.com/'
});

export default instance;