import axios from 'axios';

const STUDENT_API_BASE_URL="http://localhost:8070/student";

class StudentService{

    insertStudents(students){
        return axios.post(STUDENT_API_BASE_URL + '/add',students);
    }
    getAllStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }
    getStudentById(id){
        return axios.get(STUDENT_API_BASE_URL+'/'+id);
    }




}

export default new StudentService()