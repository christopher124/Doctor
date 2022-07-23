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
export async function getCountQuoteApi(logout) {
  try {
    const url = `${API_URL_DEV}/quotes/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
