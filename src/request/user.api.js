import request from ".";

export async function getMe(params) {
    return request(`user/info`, {
        method: "GET",
        params
    });
}