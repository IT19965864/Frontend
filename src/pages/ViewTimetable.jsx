import React, { Component } from "react";
import timetableService from "../adapters/timetableService";
import Navbar from "../components/TimetableNav";
import { Table, Button, Icon, Search } from "semantic-ui-react";
import "../styles/student.css";
import { withRouter } from "react-router-dom";
const colors = ["blue"];

class ViewTimetable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      searchId: "",
    };

    this.viewSingleStudent = this.viewSingleStudent.bind(this);
  }

  componentDidMount() {
    timetableService.getAllTimetable().then((res) => {
      this.setState({ students: res.data });
      console.log(res.data);
    });
  }
  searchMenuId(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }
  viewSingleStudent(id) {
    // this.history.push(`/singleStudent/${id}`);
    window.location = `/singleViewTimetable/${id}`;
  }

  render() {
    let filterEmpId = this.state.students.filter((student) => {
      return student.teacherName.indexOf(this.state.searchId) !== -1;
    });

    return (
      <div>
        <Navbar />
        <div id="student-search">
          <Search
            //loading={loading}
            placeholder="Search..."
            // onResultSelect={(e, data) =>
            //     dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
            // }
            onSearchChange={this.searchMenuId.bind(this)}
            // results={results}
            value={this.state.searchId}
          />
        </div>

        <div className="student">
          {colors.map((color) => (
            <Table striped id="student-table" color={color} key={color}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Teacher Name</Table.HeaderCell>
                  <Table.HeaderCell>Subject</Table.HeaderCell>
                  <Table.HeaderCell>Grade</Table.HeaderCell>
                  <Table.HeaderCell>Day</Table.HeaderCell>
                  <Table.HeaderCell>Start Time</Table.HeaderCell>
                  <Table.HeaderCell>End Time</Table.HeaderCell>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {filterEmpId.map((timetable) => (
                  <Table.Row key={timetable._id}>
                    <Table.Cell>{timetable.teacherName}</Table.Cell>
                    <Table.Cell>{timetable.subject}</Table.Cell>
                    <Table.Cell>{timetable.grade}</Table.Cell>
                    <Table.Cell>{timetable.day}</Table.Cell>
                    <Table.Cell>{timetable.startTime} AM</Table.Cell>
                    <Table.Cell>{timetable.endTime} PM</Table.Cell>

                    <Table.Cell>
                      <Button
                        secondary
                        type="viewmore"
                        size="small"
                        onClick={() => this.viewSingleStudent(timetable._id)}
                      >
                        View More
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell colSpan="6">
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      primary
                      size="small"
                    >
                      <Icon name="file pdf" /> Generate Report
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          ))}
        </div>
      </div>
    );
  }
}
export default withRouter(ViewTimetable);
