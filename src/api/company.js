import request from "@/service/request.js";

export function getCompanyList() {
    return request({
        url: "/v1/company/list",
        method: "get",
    });
}
