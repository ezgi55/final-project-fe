import http from "utils/http";
import { events } from "constants/endpoints";

const getEvents = () => {
  const ENDPOINT = events.getEvents();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};


export default getEvents ;