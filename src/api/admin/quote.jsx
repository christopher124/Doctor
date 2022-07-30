import { API_URL_DEV } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

export async function createQuotesApi(quote, logout) {
  try {
    const url = `${API_URL_DEV}/quotes`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
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

export async function getQuotesApi(logout) {
  try {
    const url = `${API_URL_DEV}/quotes`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function deleteQuotesApi(id, logout) {
  try {
    const url = `${API_URL_DEV}/quotes/${id}`;
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

export async function getQuotesUserApi(idCustomer, logout) {
  try {
    const url = `${API_URL_DEV}/quotes?customer=${idCustomer}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function getQuotesDoctorApi(idCustomer, logout) {
  try {
    const url = `${API_URL_DEV}/quotes?doctor=${idCustomer}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function getCountQuotesApi(logout) {
  try {
    const url = `${API_URL_DEV}/quotes/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
