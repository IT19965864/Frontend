
import React,{Component} from 'react';
import Navbar from '../components/StuNavBar';
import '../styles/student.css';
import { Button, Card, Form ,Dropdown} from 'semantic-ui-react'
import studentService from '../adapters/studentService';
//import {useNavigate} from 'react-router-dom';
class viewSingleStudnet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      student: {},
    };
  }

  componentDidMount() {
    studentService.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data });
      console.log(this.state.id);
    });
  }

  ok() {
    this.props.history.push("/viewStudent");
  }

  render() {
    return (
      <div>
        <Navbar/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <div className="student-box-view box-size box-shadow">
          <p className="student-heading">Student Information</p>

          <div className="student-box-view-text grid">
            <p>Student Name</p>
            <p>{this.state.student.stuName}</p>
            <p>NIC</p>
            <p>{this.state.student.nic}</p>
            <p>Gender</p>
            <p>{this.state.student.gender}</p>
            <p>Address</p>
            <p>{this.state.student.address}</p>
            <p>Email</p>
            <p>{this.state.student.email}</p>
            <p>Contact Number</p>
            <p>{this.state.student.mobile}</p>
            <div className="back-button">
              <Button
                primary
                type="viewmore"
                size="small"
                onClick={() => this.ok()}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default viewSingleStudnet;
