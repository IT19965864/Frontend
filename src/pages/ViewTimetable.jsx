import React, { Component } from "react";
import timetableService from "../adapters/timetableService";
import Navbar from "../components/TimetableNav";
import { Table, Button, Icon, Search } from "semantic-ui-react";
import "../styles/timetable.css";
import { withRouter } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import jspdf from "jspdf";
import "jspdf-autotable";
const colors = ["blue"];

class ViewTimetable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timetable: [],
      searchId: "",
    };

    this.viewSingleTimetable = this.viewSingleTimetable.bind(this);
    this.Updatetimetable = this.Updatetimetable.bind(this);
  }

  componentDidMount() {
    timetableService.getAllTimetable().then((res) => {
      this.setState({ timetable: res.data });
      console.log(res.data);
    });
  }
  searchMenuId(event) {
    this.setState({ searchId: event.target.value.substr(0, 20) });
  }
  viewSingleTimetable(id) {
    window.location = `/singleViewTimetable/${id}`;
  }
  Updatetimetable(id) {
    console.log(id);
    window.location = `/updateTimetable/${id}`;
    // this.props.history.push(`/updateTimetable/${id}`);
    console.log(id);
  }
  DeleteTimetable(id) {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this teacher",
      buttons: [
        {
          label: "Yes",
          className: "button",
          onClick: () =>
            timetableService.deleteTimetable(id).then((res) => {
              this.setState({
                timetable: this.state.timetable.filter(
                  (timetable) => timetable._id !== id
                ),
              });
            }),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });

    console.log(id);
  }
  generatePDF(timetable) {
    console.log(timetable);
    const doc = new jspdf();
    const tableColumn = [
      "Teacher Name",
      "Subject ",
      "Grade",
      "Day",
      "Start Time",
      "End Time",
    ];
    const tableRows = [];

    timetable
      .slice(0)
      .reverse()
      .map((timetable) => {
        const timetableData = [
          timetable.teacherName,
          timetable.subject,
          timetable.grade,
          timetable.day,
          timetable.startTime,
          timetable.endTime,
        ];
        tableRows.push(timetableData);
      });
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("Timetable-Report", 14, 15).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
    doc.save(`Timetable-Details-Report_${dateStr}.pdf`);
  }

  render() {
    let filterEmpId = this.state.timetable.filter((timetable) => {
      return timetable.teacherName.indexOf(this.state.searchId) !== -1;
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
                        color="blue"
                        type="viewmore"
                        size="small"
                        onClick={() => this.viewSingleTimetable(timetable._id)}
                      >
                        View More
                      </Button>
                      <Button
                        color="teal"
                        type="update"
                        size="small"
                        onClick={() => this.Updatetimetable(timetable._id)}
                      >
                        Update
                      </Button>
                      <Button
                        color="red"
                        type="delete"
                        size="small"
                        onClick={() => this.DeleteTimetable(timetable._id)}
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
                  <Table.HeaderCell colSpan="6">
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      primary
                      size="small"
                      onClick={(e) => {
                        this.generatePDF(this.state.timetable);
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
export default withRouter(ViewTimetable);
