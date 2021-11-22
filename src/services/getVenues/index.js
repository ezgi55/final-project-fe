import http from "utils/http";
import { venues } from "../../constants/endpoints";

const getVenues = () => {
  const ENDPOINT = venues.getEvents();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};


export default getVenues ;