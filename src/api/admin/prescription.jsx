import { API_URL_PROD } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

export async function createPrescripApi(prescription, logout) {
  try {
    const url = `${API_URL_PROD}/prescriptions`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prescription),
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

export async function getPrescripApi(logout) {
  try {
    const url = `${API_URL_PROD}/prescriptions`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function updatePrescripApi(id, prescription, logout) {
  try {
    const url = `${API_URL_PROD}/prescriptions/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prescription),
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
export async function getOnePrescripApi(id, logout) {
  try {
    const url = `${API_URL_PROD}/prescriptions/${id}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function deletePrescripApi(id, logout) {
  try {
    const url = `${API_URL_PROD}/prescriptions/${id}`;
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
export async function getCountPrescripApi(logout) {
  try {
    const url = `${API_URL_PROD}/prescriptions/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function getPrescripCustomerApi(idCustomer, logout) {
  try {
    const url = `${API_URL_PROD}/prescriptions?customer=${idCustomer}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
