import request from ".";

export async function getMe() {
    return request(`user/info`, {
        method: "GET"
    });
}