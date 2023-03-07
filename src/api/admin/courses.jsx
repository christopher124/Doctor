import { API_URL_DEV } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

export async function createCoursesApi(courses, logout) {
  try {
    const url = `${API_URL_DEV}/courses`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courses),
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
export async function updateCoursesApi(id, courses, logout) {
  try {
    const url = `${API_URL_DEV}/courses/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courses),
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

export async function getCoursesApi(logout) {
  try {
    const url = `${API_URL_DEV}/courses`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function deleteCoursesApi(id, logout) {
  try {
    const url = `${API_URL_DEV}/courses/${id}`;
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

export async function getOneCoursesApi(id, logout) {
  try {
    const url = `${API_URL_DEV}/courses/${id}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function getCountCoursesApi(logout) {
  try {
    const url = `${API_URL_DEV}/courses/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
