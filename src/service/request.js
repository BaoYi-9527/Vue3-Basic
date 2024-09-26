import axios from 'axios'
const service = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Access-Control-Allow-Origin': '*'
    }
})

// request 拦截器
service.interceptors.request.use(
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
    return service .get(url, { params });
};

export const post_request = (url, data) => {
    return service .post(url, data);
};

export const put_request = (url, data) => {
    return service .put(url, data);
};

export const delete_request = (url, data) => {
    return service .delete(url, data);
};

export default service