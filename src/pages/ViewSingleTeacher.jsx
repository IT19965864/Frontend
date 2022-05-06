import React, { Component } from "react";
import teacherService from "../adapters/TeacherService";
import { Table, Button, Icon, Search } from "semantic-ui-react";
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
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
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
        {/* <div className="teacher img">
          <img src="../img/teacher1.jpg" alt="hh" />
        </div> */}
        {/* <div
          className="card col-md-7 offset-md-3"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
        >
          <h3 className="text-center">View Teacher details </h3>
          <div className="card-body">
            <div className="row">
              <div style={{ fontWeight: "bold" }}>
                <label>Menu Item Type:</label>
              </div>
              <br></br>
              <div style={{ marginLeft: 20 }}>
                {this.state.teacher.menuItemType}
              </div>
            </div>
            <div className="row">
              <div style={{ fontWeight: "bold" }}>
                <label>Menu Item Name:</label>
              </div>
              <br></br>
              <div style={{ marginLeft: 20 }}>
                {this.state.teacher.menuItemName}
              </div>
            </div>
            <div className="row">
              <div style={{ fontWeight: "bold" }}>
                <label>Unit Price:</label>
              </div>
              <br></br>
              <div style={{ marginLeft: 20 }}>
                {this.state.teacher.unitPrice}
              </div>
            </div>
            <div className="row">
              <div style={{ fontWeight: "bold" }}>
                <label>Description:</label>
              </div>

              <div
                className="card col-md-4 "
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                }}
              >
                <div style={{ marginLeft: 20, color: "#9f4ef5" }}>
                  {this.state.teacher.description}
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div style={{ fontWeight: "bold" }}>
                <label>Discount:</label>
              </div>
              <br></br>

              <div style={{ marginLeft: 20 }}>
                {this.state.menuItem.discount}
              </div>
            </div>
            <div class="form-group col-md-6">
              <button
                id="cancel"
                class="btn "
                style={{
                  background: "#bd9660",
                  color: "white",
                  marginLeft: 10,
                  marginTop: 20,
                }}
                onClick={this.cancel.bind(this)}
              >
                Back
              </button>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default viewSingleTeacher;
