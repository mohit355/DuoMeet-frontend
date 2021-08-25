export const postRequest = async (url, payload) => {
  console.log("print url ", url, payload);
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch((err) => err);
};

export const getRequest = (url) => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => err);
};
