import axios from "axios";

const STUDENT_MARK_API_BASE_URL = "http://localhost:8070/mark";

class StudentMarkService {
  insertMarks(marks) {
    return axios.post(STUDENT_MARK_API_BASE_URL + "/add", marks);
  }
  getAllMarks() {
    return axios.get(STUDENT_MARK_API_BASE_URL);
  }
  getStudentMarkById(markId) {
    return axios.get(STUDENT_MARK_API_BASE_URL + `/ ${markId} `);
  }
}

export default new StudentMarkService();
