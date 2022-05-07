import React, { Component } from "react";
import teacherService from "../adapters/TeacherService";
import { Table, Button, Icon, Search } from "semantic-ui-react";
import teacherImg from "../img/teacher2.jpg";
import "../styles/teacher.css";

class viewSingleTeacher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      teacher: {},
    };
  }

  componentDidMount() {
    teacherService.getTeacherById(this.state.id).then((res) => {
      this.setState({ teacher: res.data.user });
    });
  }

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="teacher-view grid-view-teacher">
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <div className="grid-view-teacher">
          <div className="teacher-box-view box-size box-shadow">
            <p className="teacher-heading">Teacher Information</p>

            <div className="teacher-box-view-text grid">
              <p>Teacher Name</p>
              <p>{this.state.teacher.teacherName}</p>
              <p>NIC</p>
              <p>{this.state.teacher.teacherNic}</p>
              <p>Contact Number</p>
              <p>{this.state.teacher.teacherMobile}</p>
              <p>E-mail</p>
              <p>{this.state.teacher.teacherEmail}</p>
              <div className="back-button">
                <Button
                  secondary
                  type="viewmore"
                  size="small"
                  onClick={() => this.cancel()}
                >
                  OK
                </Button>
              </div>
            </div>
          </div>
          <div className="teacher img">
            <img
              src={teacherImg}
              alt="hh"
              className="teacher-inforamtion-img"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default viewSingleTeacher;
