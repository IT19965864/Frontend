import "../styles/studentmark.css";
import Navbar from "../components/StuMarksNavBar";
import { Button, Card, Form, Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import React, { Component } from "react";

class ViewSingleMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      teacher: {},
    };
  }

  componentDidMount() {
    StudentMarkService.getStudentMarkById(this.state.id).then((res) => {
      this.setState({ mark: res.data.user });
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
          <p className="teacher-heading">Student Marks Information</p>

          <div className="teacher-box-view-text grid">
            <p>NIC</p>
            <p>{this.state.mark.nicno}</p>
            <p>Name</p>
            <p>{this.state.mark.studName}</p>
            <p>Stream</p>
            <p>{this.state.mark.stream}</p>
            <p>Term</p>
            <p>{this.state.mark.term}</p>
            <p>Chemistry Marks</p>
            <p>{this.state.mark.chemMarks}</p>
            <p>Physics Mark</p>
            <p>{this.state.mark.physicsMarks}</p>
            <p>Biology Mark</p>
            <p>{this.state.mark.bioMarks}</p>
            <p>Maths Mark</p>
            <p>{this.state.mark.mathsMarks}</p>

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

export default withRouter(ViewSingleMark);
