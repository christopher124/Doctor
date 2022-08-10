import { API_URL_PROD } from "../../utils/constants";
import { authFetch } from "../../utils/fetch";

export async function createQuotesApi(quote, logout) {
  try {
    const url = `${API_URL_PROD}/quotes`;
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
export async function updateQuotesApi(id, quotes, logout) {
  try {
    const url = `${API_URL_PROD}/quotes/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quotes),
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

export async function getQuotesApi(logout) {
  try {
    const url = `${API_URL_PROD}/quotes`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function deleteQuotesApi(id, logout) {
  try {
    const url = `${API_URL_PROD}/quotes/${id}`;
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

export async function getOneQuotesApi(id, logout) {
  try {
    const url = `${API_URL_PROD}/quotes/${id}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function getQuotesUserApi(idCustomer, logout) {
  try {
    const url = `${API_URL_PROD}/quotes?customer=${idCustomer}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function getQuotesDoctorApi(idCustomer, logout) {
  try {
    const url = `${API_URL_PROD}/quotes?doctor=${idCustomer}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function getQuotesUsersApi(id, logout) {
  try {
    const url = `http://localhost:1337/quotes?doctor.user=${id}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
export async function getCountQuotesApi(logout) {
  try {
    const url = `${API_URL_PROD}/quotes/count`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

export async function getCountQuotesDoctorApi(idDoctor, logout) {
  try {
    const url = `${API_URL_PROD}/quotes/count?doctor.user=${idDoctor}`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}
