const API_URL = `http://private-277e1-xendera1.apiary-mock.com`;

export function getRequest(url) {
  const URL = `${API_URL}${url}`;

  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
