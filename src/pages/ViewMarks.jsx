import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import StudentMarkService from "../adapters/StudentMarkService";
import Navbar from "../components/StuMarksNavBar";
import { Table, Button, Icon, Search } from "semantic-ui-react";
import "../styles/studentmark.css";
import { confirmAlert } from "react-confirm-alert";

const colors = ["blue"];

class ViewMarks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marks: [],
      searchId: "",
    };

    this.ViewSingleMark = this.ViewSingleMark.bind(this);
    this.GenerateReport = this.GenerateReport.bind(this);
    this.removeStudentMark = this.removeStudentMark.bind(this);
    this.UpdateMark = this.UpdateMark.bind(this);
  }

  componentDidMount() {
    StudentMarkService.getAllMarks().then((res) => {
      this.setState({ marks: res.data });
      console.log(res.data);
    });
  }
  searchMenuId(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }
  ViewSingleMark(id) {
    this.props.history.push(`/ViewSingleMark/${id}`);
    console.log(id);
  }
  GenerateReport() {
    this.props.history.push("/mark-report");
  }
  UpdateMark(id) {
    this.props.history.push(`/UpdateMark/${id}`);
    console.log(id);
  }

  onClickDeleteStudentMark(id) {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete ?",
      buttons: [
        {
          label: "Yes",
          className: "button",
          onClick: () => this.removeStudentMark(id),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  }
  removeStudentMark(id) {
    StudentMarkService.deleteStudentMark(id).then((res) => {
      this.setState({
        ...this.state,
        marks: this.state.marks.filter((mark) => mark._id !== id),
      });
    });
  }

  render() {
    let filterEmpId = this.state.marks.filter((mark) => {
      return mark.stream.indexOf(this.state.searchId) !== -1;
    });

    return (
      <div>
        <Navbar />
        <div id="title-list">
          <h2> Student Marks List </h2>
        </div>

        <div id="student-mark-search">
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

        <Link
          to="/addMark"
          className="btn btn-primary"
          type="submit"
          size="small"
          id="student-add-button"
        >
          Add Student Marks
        </Link>

        <div className="student-mark">
          {colors.map((color) => (
            <Table striped id="student-mark-table" color={color} key={color}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>NIC</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Stream</Table.HeaderCell>
                  <Table.HeaderCell>Term</Table.HeaderCell>
                  <Table.HeaderCell>Chemistry Marks</Table.HeaderCell>
                  <Table.HeaderCell>Physics Mark</Table.HeaderCell>
                  <Table.HeaderCell>Biology Mark</Table.HeaderCell>
                  <Table.HeaderCell>Maths Mark</Table.HeaderCell>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {filterEmpId.map((mark) => (
                  <Table.Row key={mark.nicno}>
                    <Table.Cell>{mark.nicno}</Table.Cell>
                    <Table.Cell>{mark.studName}</Table.Cell>
                    <Table.Cell>{mark.stream}</Table.Cell>
                    <Table.Cell>{mark.term}</Table.Cell>
                    <Table.Cell>{mark.chemMarks}</Table.Cell>
                    <Table.Cell>{mark.physicsMarks}</Table.Cell>
                    <Table.Cell>{mark.bioMarks}</Table.Cell>
                    <Table.Cell>{mark.mathsMarks}</Table.Cell>
                    <Table.Cell>
                      <Button
                        secondary
                        type="viewmore"
                        size="small"
                        onClick={() => this.ViewSingleMark(mark._id)}
                      >
                        View More
                      </Button>
                      <Button
                        secondary
                        type="update"
                        size="small"
                        onClick={() => this.UpdateMark(mark._id)}
                      >
                        Update
                      </Button>
                      {/* <Button
                        color="red"
                        type="delete"
                        size="small"
                        onClick={() => this.onClickDeleteStudentMark(mark._id)}
                      >
                        Delete
                      </Button> */}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell colSpan="6">
                    <Button
                      id="mark-report-button"
                      floated="right"
                      icon
                      labelPosition="left"
                      primary
                      size="small"
                      onClick={this.GenerateReport}
                      type="submit"
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
export default withRouter(ViewMarks);
