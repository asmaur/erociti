import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:8000/citi/',
    baseURL: 'https://api.erociti.com/citi/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Token 2d63ded23fc2a5e9653620af32e5cefe5e278094"
        //'Authorization': "Token f02c100987bff7d226ba192b3a062b29700582ee" //teste local
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    //withCredentials: true
});
