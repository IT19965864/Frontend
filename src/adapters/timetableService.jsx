import axios from "axios";

const TIMETABLE_API_BASE_URL = "http://localhost:8070/timetable";
const AUTH_API_BASE_URL = "http://localhost:8070/auth";

class TimetableService {
  insertTimetable(timetable) {
    return axios.post(TIMETABLE_API_BASE_URL + "/", timetable);
  }
  getAllTimetable() {
    return axios.get(TIMETABLE_API_BASE_URL);
  }
  getTimetableById(timetableId) {
    console.log(timetableId);
    return axios.get(TIMETABLE_API_BASE_URL + `/${timetableId}`);
  }
  updateTimetable(value, timetableId) {
    console.log(timetableId);
    return axios.put(TIMETABLE_API_BASE_URL + `/${timetableId}`, value);
  }
  deleteTimetable(id) {
    return axios.delete(TIMETABLE_API_BASE_URL + "/" + id);
  }
  insertLogin(login) {
    return axios.post(AUTH_API_BASE_URL + "/login", login);
  }
}

export default new TimetableService();
