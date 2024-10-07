import request from "@/service/request.js";

export function getCompanyHotRank() {
    return request({
        url: "/v1/company/hot-rank",
        method: "get",
    });
}

export function getCompanyList() {
    return request({
        url: "/v1/company/list",
        method: "get",
    });
}
