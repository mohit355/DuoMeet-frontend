import axios from "axios";

// export const postRequest = async (url, payload = {}) => {
//   const data = await axios
//     .post(url, payload)
//     .then((resp) => {
//       return resp.data;
//     })
//     .catch((err) => ({ error: err.response.data }));
//   console.log("response data ", data);

//   return data;
// };

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

export const putRequest = async (url, payload = {}) => {
  const data = await axios
    .put(url, payload)
    .then((resp) => resp.data)
    .catch((err) => ({ error: err.response.data }));
  return data;
};

// export const getRequest = async (url) => {
//   const data = await axios
//     .get(url)
//     .then((resp) => resp.data)
//     .catch((err) => ({ error: err.response.data }));
//   console.log("getRequest ", data);

//   return data;
// };

export const getRequest = (url) => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const deleteRequest = async (url) => {
  const data = await axios
    .delete(url)
    .then((resp) => resp.data)
    .catch((err) => ({ error: err.response.data }));
  return data;
};
