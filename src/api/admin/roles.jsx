import { API_URL } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

export async function getRolesApi(logout) {
  try {
    const url = `${API_URL}/users-permissions/roles`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
