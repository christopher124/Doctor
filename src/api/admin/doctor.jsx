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
export async function getCountDoctorApi(logout) {
  try {
    const url = `${API_URL}/doctors/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
