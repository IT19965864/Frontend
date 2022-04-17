import axios from "axios";

const TIMETABLE_API_BASE_URL = "http://localhost:8070/timetable";

class TimetableService {
  insertTimetable(timetable) {
    return axios.post(TIMETABLE_API_BASE_URL + "/", timetable);
  }
  getAllTimetable() {
    return axios.get(TIMETABLE_API_BASE_URL);
  }
}

export default new TimetableService();
