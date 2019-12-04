import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d70deef0b292dd1a47fd2995ba542249f5ac302db176a29311499020faf3ceec'
    }
});