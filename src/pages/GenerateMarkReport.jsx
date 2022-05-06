import React, { Component } from "react";
import StudentMarkService from "../adapters/StudentMarkService";

class GenerateMarkReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marks: [],
    };
    this.GenerateReport = this.GenerateReport.bind(this);
  }

  componentDidMount() {
    StudentMarkService.getAllMarks().then((res) => {
      this.setState({ marks: res.data });
      console.log(res.data);
    });
  }

  GenerateReport() {
    this.props.history.push("/mark-report");
  }

  render() {
    return (
      <div>
        <h2> Student Marks List </h2>

        <div>
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
                  <Table.Cell></Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default GenerateMarkReport;
