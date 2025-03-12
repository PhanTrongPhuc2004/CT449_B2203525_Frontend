import axios from "axios";

// Create a reusable Axios instance with common headers
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

// Create a new Axios instance with the given base URL and common headers
export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};