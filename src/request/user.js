import request from ".";

export async function getDocsById(id) {
  return request(`/docs/${id}`, {
    method: "GET",
  });
}