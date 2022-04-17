import axios from "axios";

const TEACHER_API_BASE_URL = "http://localhost:8070/teacher";

class TeacherService {
  insertTeachers(teachers) {
    return axios.post(TEACHER_API_BASE_URL + "/add", teachers);
  }
  getAllTeachers() {
    console.log("ava");
    return axios.get(TEACHER_API_BASE_URL);
  }
  getTeacherById(teacherId) {
    console.log(teacherId);
    return axios.get(TEACHER_API_BASE_URL + `/get/${teacherId}`);
  }
}

export default new TeacherService();
