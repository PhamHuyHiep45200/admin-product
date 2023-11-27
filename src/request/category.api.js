import request from ".";

export async function getAllCategory() {
  return request(`category/get_all_parent`, {
    method: "GET",
  });
}

export async function createCategory(data) {
  return request(`category/create`, {
    method: "POST",
    data,
  });
}

export async function updateCategory(id, data) {
  return request(`category/update/${id}`, {
    method: "PATCH",
    data,
  });
}