import { API_URL_DEV } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

export async function createStudentsApi(students, logout) {
  try {
    const url = `${API_URL_DEV}/students`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(students),
    };
    const result = await authFetch(url, params, logout);
    // eslint-disable-next-line no-throw-literal
    if (result.statusCode === 500) throw "Error del servidor";
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getStudentsApi(logout) {
  try {
    const url = `${API_URL_DEV}/students`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function updateStudentsApi(id, students, logout) {
  try {
    const url = `${API_URL_DEV}/students/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(students),
    };
    const result = await authFetch(url, params, logout);
    // eslint-disable-next-line no-throw-literal
    if (result.statusCode === 400) throw "Error del servidor";
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function getOneStudentsApi(id, logout) {
  try {
    const url = `${API_URL_DEV}/students/${id}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function deleteStudentsApi(id, logout) {
  try {
    const url = `${API_URL_DEV}/students/${id}`;
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await authFetch(url, params, logout);
    // eslint-disable-next-line no-throw-literal
    if (result.statusCode === 500) throw "Error del servidor";
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function getCountStudentsApi(logout) {
  try {
    const url = `${API_URL_DEV}/students/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
