import axios from "axios";

const useApi = () => {
	const baseApiUrl = "https://ecommerce-api.udemig.dev/api/v2/";

	axios.defaults.baseURL = baseApiUrl;

	const token = localStorage.getItem("token");

	if (token) {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	}

	return axios;
};

export default useApi;
