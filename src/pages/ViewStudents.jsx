import React, { Component } from "react";
import studentService from "../adapters/studentService";
import Navbar from "../components/StuNavBar";
import { Table, Button, Icon, Search } from "semantic-ui-react";
import "../styles/timetable.css";
import { withRouter } from "react-router-dom";

const colors = ["blue"];

class ViewStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      searchId: "",
    };

    this.viewSingleStudent = this.viewSingleStudent.bind(this);
    this.viewSingleStudent = this.viewSingleStudent.bind(this);
  }

  componentDidMount() {
    studentService.getAllStudents().then((res) => {
      this.setState({ students: res.data });
      console.log(res.data);
    });
  }
  searchMenuId(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }
  viewSingleStudent(id) {
    this.props.history.push(`/viewOneStudent/${id}`);
    console.log(id);
  }

  render() {
    let filterEmpId = this.state.students.filter((student) => {
      return student.stuName.indexOf(this.state.searchId) !== -1;
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
        <label id="student-table-label">Students List</label>
        <div className="student">
          {colors.map((color) => (
            <Table striped id="student-table" color={color} key={color}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>NIC</Table.HeaderCell>
                  <Table.HeaderCell>Gender</Table.HeaderCell>
                  <Table.HeaderCell>Address</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>ContactNo</Table.HeaderCell>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {filterEmpId.map((student) => (
                  <Table.Row key={student.nic}>
                    <Table.Cell>{student.stuName}</Table.Cell>
                    <Table.Cell>{student.nic}</Table.Cell>
                    <Table.Cell>{student.gender}</Table.Cell>
                    <Table.Cell>{student.address}</Table.Cell>
                    <Table.Cell>{student.email}</Table.Cell>
                    <Table.Cell>{student.mobile}</Table.Cell>
                    <Table.Cell>
                      <Button
                        secondary
                        type="viewmore"
                        size="small"
                        onClick={() => this.viewSingleStudent(student._id)}
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
export default withRouter(ViewStudents);
