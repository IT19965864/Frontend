import { Component } from "react";
import teacherService from "../adapters/TeacherService";
import Navbar from "../components/TeacherNavBar";
import { Table, Button, Icon, Search } from "semantic-ui-react";
import "../styles/teacher.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import jspdf from "jspdf";
import "jspdf-autotable";

import { withRouter } from "react-router-dom";

const colors = ["blue"];

class ViewTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      searchId: "",
    };
    this.viewSingleTeacher = this.viewSingleTeacher.bind(this);
    this.onClickDeleteTeacher = this.onClickDeleteTeacher.bind(this);
    this.removeTeacher = this.removeTeacher.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
  }
  viewSingleTeacher(id) {
    console.log("kasun");
    this.props.history.push(`/singleTeacher/${id}`);
  }
  editTeacher(id) {
    this.props.history.push(`/updateTeacher/${id}`);
  }
  onClickDeleteTeacher(id) {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this teacher",
      buttons: [
        {
          label: "Yes",
          className: "button",
          onClick: () => this.removeTeacher(id),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  }
  removeTeacher(id) {
    teacherService.deleteTeacher(id).then((res) => {
      this.setState({
        ...this.state,
        teachers: this.state.teachers.filter((teacher) => teacher._id !== id),
      });
    });
  }
  generatePDF(teachers) {
    alert("ok");
    console.log(teachers);
    const doc = new jspdf();
    const tableColumn = [
      "Teacher Name",
      "Teacher NIC",
      "Gender",
      "Birthday",
      "Email",
      "Mobile",
      "Subject",
      "Grade",
    ];
    const tableRows = [];

    teachers
      .slice(0)
      .reverse()
      .map((teacher) => {
        const teacherData = [
          teacher.teacherName,
          teacher.teacherNic,
          teacher.teacherGender,
          teacher.teacherBirthDate,
          teacher.teacherEmail,
          teacher.teacherMobile,
          teacher.teacherSubject,
          teacher.teacherGrade,
        ];
        tableRows.push(teacherData);
      });
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("Teacher-Report", 14, 15).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
    doc.save(`Teacher-Details-Report_${dateStr}.pdf`);
  }

  // removeTeacher(id) {
  //   var txt;
  //   if (window.confirm("Are You Sure You Want To Delete!")) {
  //     teacherService.deleteTeacher(id).then((res) => {
  //       this.setState({
  //         ...this.state,
  //         teachers: this.state.teachers.filter((teacher) => teacher._id !== id),
  //       });
  //     });
  //     txt = "You Succesfully Deleted Teacher!";
  //   } else {
  //     txt = "You pressed Cancel Try Again!";
  //   }

  //   document.getElementById("demo").innerHTML = txt;
  // }

  componentDidMount() {
    console.log("didmount");
    teacherService.getAllTeachers().then((res) => {
      this.setState({ ...this.state, teachers: res.data });
      // console.log(teachers);
    });
  }
  searchTeacherId(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }

  render() {
    let filterTeacherSubject = [];
    if (this.state.teachers && this.state.teachers.length > 0) {
      filterTeacherSubject = this.state.teachers.filter((teacher) => {
        return (
          teacher.teacherSubject
            .toLowerCase()
            .indexOf(this.state.searchId.toLowerCase()) !== -1
        );
      });
    }

    return (
      <div>
        <Navbar />
        <div className="search-teacher">
          <Search
            placeholder="Enter Subject..."
            onSearchChange={this.searchTeacherId.bind(this)}
            value={this.state.searchId}
          />
        </div>
        <p id="demo"></p>

        <div className="teacher">
          <p id="demo"></p>
          {colors.map((color) => (
            <Table striped id="teacher-table" color={color} key={color}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  {/* <Table.HeaderCell>NIC</Table.HeaderCell> */}
                  <Table.HeaderCell>Gender</Table.HeaderCell>
                  <Table.HeaderCell>Birthday</Table.HeaderCell>
                  {/* <Table.HeaderCell>Email</Table.HeaderCell> */}
                  {/* <Table.HeaderCell>Contact</Table.HeaderCell> */}
                  <Table.HeaderCell>Subject</Table.HeaderCell>
                  <Table.HeaderCell>Grade</Table.HeaderCell>
                  <Table.HeaderCell colSpan="6" textAlign="center">
                    Action
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {filterTeacherSubject.map((teacher) => (
                  <Table.Row key={teacher._id}>
                    <Table.Cell>{teacher.teacherName}</Table.Cell>
                    {/* <Table.Cell>{teacher.teacherNic}</Table.Cell> */}
                    <Table.Cell>{teacher.teacherGender}</Table.Cell>
                    <Table.Cell>
                      {new Date(teacher.teacherBirthDate).getFullYear()}/
                      {new Date(teacher.teacherBirthDate).getMonth()}/
                      {new Date(teacher.teacherBirthDate).getDay()}
                    </Table.Cell>
                    {/* <Table.Cell>{teacher.teacherEmail}</Table.Cell> */}
                    {/* <Table.Cell>{teacher.teacherMobile}</Table.Cell> */}
                    <Table.Cell>{teacher.teacherSubject}</Table.Cell>
                    <Table.Cell>{teacher.teacherGrade}</Table.Cell>
                    <Table.Cell>
                      <Button
                        color="blue"
                        type="viewmore"
                        size="small"
                        onClick={() => this.viewSingleTeacher(teacher._id)}
                      >
                        View More
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        color="teal"
                        type="update"
                        size="small"
                        onClick={() => this.editTeacher(teacher._id)}
                      >
                        Update
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        color="red"
                        type="delete"
                        size="small"
                        onClick={() => this.onClickDeleteTeacher(teacher._id)}
                      >
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell colSpan="12">
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      color="brown"
                      size="small"
                      onClick={(e) => {
                        this.generatePDF(this.state.teachers);
                      }}
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

export default withRouter(ViewTeacher);
