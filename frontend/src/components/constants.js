// constants.js

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_BASE_URL_LOCAL
    : process.env.REACT_APP_API_BASE_URL_DEPLOY;

export default BASE_URL;

