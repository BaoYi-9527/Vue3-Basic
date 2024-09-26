import request from "@/service/request.js";

export function getPostList() {
    return request({
        url: "/v1/post/list",
        method: "get",
    });
}