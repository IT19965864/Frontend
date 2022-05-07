import axios from "axios";

const STUDENT_MARK_API_BASE_URL = "http://localhost:8070/mark";

class StudentMarkService {
  insertMarks(marks) {
    return axios.post(STUDENT_MARK_API_BASE_URL + "/add", marks);
  }
  getAllMarks() {
    return axios.get(STUDENT_MARK_API_BASE_URL);
  }
  getStudentMarkById(id) {
    return axios.get(STUDENT_MARK_API_BASE_URL + "/" + id);
  }
  UpdateMark(marks, id) {
    return axios.put(STUDENT_MARK_API_BASE_URL + "/update/" + id, marks);
  }
}

export default new StudentMarkService();
