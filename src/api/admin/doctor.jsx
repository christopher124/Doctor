import { API_URL } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

export async function getDoctorApi(logout) {
  try {
    const url = `${API_URL}/doctors`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function getOneDoctorApi(id, logout) {
  try {
    const url = `${API_URL}/doctors/${id}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function getCountDoctorApi(logout) {
  try {
    const url = `${API_URL}/doctors/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function deleteDoctorApi(id, logout) {
  try {
    const url = `${API_URL}/doctors/${id}`;
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
