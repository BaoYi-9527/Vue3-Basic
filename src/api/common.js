import request from "@/service/request.js";

export function login() {
    request({
        url: "/v1/login",
        method: "post",
        data: {
            email: "1648186705@qq.com",
            password: "1008611"
        }
    }).then((res) => {
        if (!res.data.code) {
            localStorage.setItem("token", res.data.data.token.access_token)
        }
    })
}