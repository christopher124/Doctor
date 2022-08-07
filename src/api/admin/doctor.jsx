import { API_URL_DEV } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

export async function createDoctorApi(doctor, logout) {
  try {
    const url = `${API_URL_DEV}/doctors`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
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

export async function getDoctorApi(logout) {
  try {
    const url = `${API_URL_DEV}/doctors`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function getDoctorUserApi(id, logout) {
  try {
    const url = `${API_URL_DEV}/doctors?user=${id}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function getOneDoctorApi(id, logout) {
  try {
    const url = `${API_URL_DEV}/doctors/${id}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function getCountDoctorApi(logout) {
  try {
    const url = `${API_URL_DEV}/doctors/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function updateDoctorApi(id, doctor, logout) {
  try {
    const url = `${API_URL_DEV}/doctors/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
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

export async function deleteDoctorApi(id, logout) {
  try {
    const url = `${API_URL_DEV}/doctors/${id}`;
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
