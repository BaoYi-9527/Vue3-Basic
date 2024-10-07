import request from "@/service/request.js";

export function getCityStatistics() {
    return request({
        url: "/v1/city/statistics",
        method: "get",
    });
}