import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8000/api/v1/citi/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Token 941cccbfa203ca7dfbcca418c61a6d357b4e30e5"
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    //withCredentials: true
});