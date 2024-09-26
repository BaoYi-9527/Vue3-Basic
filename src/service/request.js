import axios from 'axios'
const request = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Access-Control-Allow-Origin': '*'
    }
})

// request 拦截器
request.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// response 拦截器
// service.interceptors.response.use(
//     response => {
//         // 在这里处理返回数据const { data } = response
//         if (data.code !== 200) {
//             console.error('Error:', data.message)
//             return Promise.reject(newError(data.message || 'Error'))
//         } else {
//             return data
//         }
//     },
//     error => {
//         console.log(error)
//         return Promise.reject(error)
//     }
// )

export const get_request = (url, params) => {
    return request .get(url, { params });
};

export const post_request = (url, data) => {
    return request .post(url, data);
};

export const put_request = (url, data) => {
    return request .put(url, data);
};

export const delete_request = (url, data) => {
    return request .delete(url, data);
};

export default request