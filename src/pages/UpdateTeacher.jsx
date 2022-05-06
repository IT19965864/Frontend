import React, { Component } from "react";
import TeacherService from "../adapters/TeacherService";
import "../styles/teacher.css";
import { Button, Select, Form, Dropdown } from "semantic-ui-react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { withRouter } from "react-router-dom";
import Navbar from "../components/TeacherNavBar";
import SoloAlert from "soloalert";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
];
const gradeOptions = [
  { key: 1, text: "1", value: 1 },
  { key: 2, text: "2", value: 2 },
  { key: 3, text: "3", value: 3 },
  { key: 4, text: "4", value: 4 },
  { key: 5, text: "5", value: 5 },
  { key: 6, text: "6", value: 6 },
  { key: 7, text: "7", value: 7 },
  { key: 8, text: "8", value: 8 },
  { key: 9, text: "9", value: 9 },
  { key: 10, text: "10", value: 10 },
  { key: 11, text: "11", value: 11 },
];

class UpdateTeacher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: this.props.match.params.id,
      id: this.props.match.params.id,
      teacherName: "",
      teacherNic: "",
      teacherGender: "",
      teacherBirthDate: "",
      teacherEmail: "",
      teacherMobile: "",
      teacherSubject: "",
      teacherGrade: "",
      teacherNameError: "",
      teacherNicError: "",
      teacherGenderError: "",
      // teacherBirthDateError: "",
      teacherEmailError: "",
      teacherMobileError: "",
      teacherSubjectError: "",
      teacherGradeError: "",
    };

    this.changeTeacherNameHandler = this.changeTeacherNameHandler.bind(this);
    this.changeTeacherNicHandler = this.changeTeacherNicHandler.bind(this);
    this.changeTeacherGenderHandler =
      this.changeTeacherGenderHandler.bind(this);
    this.changeTeacherBirthDateHandler =
      this.changeTeacherBirthDateHandler.bind(this);
    this.changeTeacherEmailHandler = this.changeTeacherEmailHandler.bind(this);
    this.changeTeacherMobileHandler =
      this.changeTeacherMobileHandler.bind(this);
    this.changeTeacherSubjectHandler =
      this.changeTeacherSubjectHandler.bind(this);
    this.changeTeacherGradeHandler = this.changeTeacherGradeHandler.bind(this);
    this.updateTeacher = this.updateTeacher.bind(this);
    this.onSuccessUpdate = this.onSuccessUpdate.bind(this);
  }

  componentDidMount() {
    TeacherService.getTeacherById(this.state.id).then((res) => {
      console.log("teacher");
      let teacher = res.data.user;
      console.log(teacher);
      this.setState({
        teacherName: teacher.teacherName,
        teacherNic: teacher.teacherNic,
        teacherGender: teacher.teacherGender,
        teacherBirthDate: teacher.teacherBirthDate,
        teacherEmail: teacher.teacherEmail,
        teacherMobile: teacher.teacherMobile,
        teacherSubject: teacher.teacherSubject,
        teacherGrade: teacher.teacherGrade,
      });
    });
    console.log(this.state.teacherBirthDate);
  }

  onSuccessUpdate() {
    confirmAlert({
      title: "Successfully Updated!",
      buttons: [
        {
          label: "OK",
          onClick: () => {
            this.props.history.push("/");
          },
        },
      ],
    });
  }

  validateUpdateTeacherForm() {
    // let menuItemTypeError="";
    let teacherNameError = "";
    let teacherNicError = "";
    let teacherGenderError = "";
    // let teacherBirthDateError = "";
    let teacherEmailError = "";
    let teacherMobileError = "";
    let teacherSubjectError = "";
    let teacherGradeError = "";

    if (
      this.state.teacherName === "" ||
      this.state.teacherName === null ||
      this.state.teacherName === undefined
    ) {
      teacherNameError = "Teacher name canot be null can not contain numbers";
    }
    if (
      this.state.teacherNic === "" ||
      this.state.teacherNic === null ||
      this.state.teacherNic === undefined
    ) {
      teacherNicError = "Teacher NIC canot be null and shoul be valid";
    }
    if (!this.state.teacherGender) {
      teacherGenderError = "Gender canot be null";
    }
    // if (!this.state.teacherBirthDate) {
    //   teacherBirthDateError = "Birthdate canot be null";
    // }
    if (
      this.state.teacherEmail === "" ||
      this.state.teacherEmail === null ||
      this.state.teacherEmail === undefined
    ) {
      teacherEmailError = "Email-address canot be null";
    }
    if (
      this.state.teacherMobile === "" ||
      this.state.teacherMobile === null ||
      this.state.teacherMobile === undefined
    ) {
      teacherMobileError = "Moblie number canot be null";
    }
    if (
      this.state.teacherSubject === "" ||
      this.state.teacherSubject === null ||
      this.state.teacherSubject === undefined
    ) {
      teacherSubjectError =
        "Teacher subject canot be null can not contain numbers";
    }
    if (!this.state.teacherGrade) {
      teacherGradeError = "Teacher grade canot be null";
    }
    if (
      teacherNameError ||
      teacherNicError ||
      teacherGenderError ||
      // teacherBirthDateError ||
      teacherEmailError ||
      teacherMobileError ||
      teacherSubjectError ||
      teacherGradeError
    ) {
      this.setState({
        teacherNameError,
        teacherNicError,
        teacherGenderError,
        // teacherBirthDateError,
        teacherEmailError,
        teacherMobileError,
        teacherSubjectError,
        teacherGradeError,
      });
      return false;
    }
    return true;
  }

  updateTeacher() {
    console.log("malith");
    const isValid = this.validateUpdateTeacherForm();
    if (isValid) {
      let teacher = {
        teacherName: this.state.teacherName,
        teacherNic: this.state.teacherNic,
        teacherGender: this.state.teacherGender,
        teacherBirthDate: this.state.teacherBirthDate,
        teacherEmail: this.state.teacherEmail,
        teacherMobile: this.state.teacherMobile,
        teacherSubject: this.state.teacherSubject,
        teacherGrade: this.state.teacherGrade,
      };
      console.log("teacher => " + JSON.stringify(teacher));
      TeacherService.updateTeachers(teacher, this.state.id).then((res) => {
        this.onSuccessUpdate();
      });
    }
  }

  changeTeacherNameHandler = (event) => {
    this.setState({ teacherName: event.target.value });
  };

  changeTeacherNicHandler = (event) => {
    this.setState({ teacherNic: event.target.value });
  };

  changeTeacherGenderHandler = (event) => {
    this.setState({ teacherGender: event.target.value });
  };

  changeTeacherBirthDateHandler = (event) => {
    this.setState({ teacherBirthDate: event.target.value });
  };

  changeTeacherEmailHandler = (event) => {
    this.setState({ teacherEmail: event.target.value });
  };

  changeTeacherMobileHandler = (event) => {
    this.setState({ teacherMobile: event.target.value });
  };

  changeTeacherSubjectHandler = (event) => {
    this.setState({ teacherSubject: event.target.value });
  };

  changeTeacherGradeHandler = (event) => {
    this.setState({ teacherGrade: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <>
        <Navbar />
        <div>
          <div className="form-teacher">
            <Form id="teacher-form">
              <label id="teacher-form-label">Update Teacher</label>
              <Form.Field>
                <label>Teacher Name</label>
                <input
                  placeholder="Teacher Name"
                  id="teacherName"
                  name="teacherName"
                  type="text"
                  onChange={this.changeTeacherNameHandler}
                  value={this.state.teacherName}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.teacherNameError}
                </div>
              </Form.Field>

              <Form.Field>
                <label>NIC</label>
                <input
                  placeholder="NIC"
                  id="teacherNic"
                  name="teacherNic"
                  type="text"
                  onChange={this.changeTeacherNicHandler}
                  value={this.state.teacherNic}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.teacherNicError}
                </div>
              </Form.Field>
              <Form.Field>
                <label>Gender</label>
                <Dropdown
                  selection
                  options={genderOptions}
                  placeholder="Gender"
                  id="teacherGender"
                  name="teacherGender"
                  onChange={this.changeTeacherGenderHandler}
                  value={this.state.teacherGender}
                  required
                  disabled
                />
              </Form.Field>

              {/* <Form.Field>
                <label>Birthday</label>
                <input
                  id="teacherBirthDate"
                  name="teacherBirthDate"
                  type="date"
                  onChange={this.changeTeacherBirthDateHandler}
                  value={this.state.teacherBirthDate}
                  required
                />
              </Form.Field> */}

              <Form.Field>
                <label>Email</label>
                <input
                  placeholder="Email"
                  id="teacherEmail"
                  name="teacherEmail"
                  type="text"
                  onChange={this.changeTeacherEmailHandler}
                  value={this.state.teacherEmail}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.teacherEmailError}
                </div>
              </Form.Field>
              <Form.Field>
                <label>Mobile</label>
                <input
                  placeholder="Mobile"
                  id="teacherMobile"
                  name="teacherMobile"
                  type="number"
                  onChange={this.changeTeacherMobileHandler}
                  value={this.state.teacherMobile}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.teacherMobileError}
                </div>
              </Form.Field>
              <Form.Field>
                <label>Subject</label>
                <input
                  placeholder="Subject"
                  id="teacherSubject"
                  name="teacherSubject"
                  type="text"
                  onChange={this.changeTeacherSubjectHandler}
                  value={this.state.teacherSubject}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.teacherSubjectError}
                </div>
              </Form.Field>

              <Form.Field>
                <label>Grade</label>
                <Dropdown
                  selection
                  options={gradeOptions}
                  placeholder="Grade"
                  id="teacherGrade"
                  name="teacherGrade"
                  onChange={this.changeTeacherGradeHandler}
                  value={this.state.teacherGrade}
                  disabled
                />
              </Form.Field>
              <div className="form-button">
                <Button
                  primary
                  type="submit"
                  size="small"
                  onClick={() => this.updateTeacher()}
                >
                  Update
                </Button>
                <Button
                  secondary
                  type="reset"
                  size="small"
                  onClick={() => this.cancel()}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(UpdateTeacher);
