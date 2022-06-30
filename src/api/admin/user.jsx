import { API_URL } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

export async function loginApi(formData) {
  try {
    const url = `${API_URL}/auth/local`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
export async function getUserApi(logout) {
  try {
    const url = `${API_URL}/users`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function getOneUserApi(id, logout) {
  try {
    const url = `${API_URL}/users/${id}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function registerApi(user, logout) {
  try {
    const url = `${API_URL}/auth/local/register`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const result = await authFetch(url, params, logout);
    if (result.statusCode === 500) throw "Error del servidor";
    else if (result.statusCode === 404) throw "Error del servidor";
    else if (result.statusCode === 400) throw "Error del servidor";
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function deleteUserApi(id, logout) {
  try {
    const url = `${API_URL}/users/${id}`;
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await authFetch(url, params, logout);
    if (result.statusCode === 500) throw "Error del servidor";
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function updateUserApi(id, users, logout) {
  try {
    const url = `${API_URL}/users/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    };
    const result = await authFetch(url, params, logout);
    if (result.statusCode === 400) throw "Error del servidor";
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function getMeApi(logout) {
  try {
    const url = `${API_URL}/users/me`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function getCountUserApi(logout) {
  try {
    const url = `${API_URL}/users/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function resetPasswordApi(email) {
  try {
    const url = `${API_URL}/auth/forgot-password`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
