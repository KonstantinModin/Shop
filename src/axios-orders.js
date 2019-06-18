import axios from 'axios';

const server = axios.create({
    baseURL: 'https://burger-shop-6267.firebaseio.com/'
});

export default server;