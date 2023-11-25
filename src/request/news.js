import request from ".";

export async function getAllNews() {
    return request(`/v1/news/get_all`, {
        method: "GET",
    });
}
export async function getAllPublished() {
    return request(`/v1/news/get_all_published`, {
        method: "GET",
    });
} 
export async function createNews(data) {
    return request(`/v1/news/create`, {
        method: "POST",
        data
    });
} 
export async function updateNews(id) {
    return request(`/v1/news/update/${id}`, {
        method: "PATCH",
    });
} 
export async function deleteNews(id, data) {
    return request(`/v1/news/delete/${id}`, {
        method: "DELETE",
        data
    });
}