import React, { Component } from "react";
import timetableService from "../adapters/timetableService";
import { Table, Button, Icon, Search } from "semantic-ui-react";
import "../styles/student.css";

class singaleView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      timetable: {},
    };
  }

  componentDidMount() {
    timetableService.getTimetableById(this.state.id).then((res) => {
      this.setState({ timetable: res.data.user });
    });
  }

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <div className="teacher-box-view box-size box-shadow">
          <p className="teacher-heading">Teacher Information</p>

          <div className="teacher-box-view-text grid">
            <p>Teacher Name</p>
            <p>{this.state.timetable.teacherName}</p>
            <p>Subject</p>
            <p>{this.state.timetable.subject}</p>
            <p>Grade r</p>
            <p>{this.state.timetable.grade}</p>
            <p>Day</p>
            <p>{this.state.timetable.day}</p>
            <p>Start Time</p>
            <p>{this.state.timetable.startTime}</p>
            <p>End Time</p>
            <p>{this.state.timetable.endTime}</p>
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
      </div>
    );
  }
}

export default singaleView;
