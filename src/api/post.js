import { request } from "@/api/api.js";

export function getPostList() {
    return request({
        url: "/v1/post/list",
        method: "get",
    });
}