import React,{ Component } from "react";
import studentService from "../adapters/studentService";
import Navbar from "../components/StuNavBar";
import { Table,Button,Icon ,Search} from 'semantic-ui-react'
import '../styles/student.css';
import { withRouter } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import jspdf from "jspdf";
import "jspdf-autotable";
const colors = [
  
    'blue',
   
  ]

class ViewStudents extends Component{

    constructor(props){
        super(props)

        this.state={
            students:[],
            searchId:''
        }

        this.viewSingleStudent=this.viewSingleStudent.bind(this);
        this.Updatestudent=this.Updatestudent.bind(this);
        this.generatePDF = this.generatePDF.bind(this);
    }

    
    componentDidMount(){
       studentService.getAllStudents().then((res)=>{
            this.setState({students:res.data});
            console.log(res.data);

        });
    }
    searchMenuId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }
    viewSingleStudent(id){
        
        this.props.history.push(`/viewOneStudent/${id}`)
        console.log(id);
    }
    DeleteStudent(id){
        studentService.deleteStudent(id).then(res=>{
            this.setState({students:this.state.students.filter(student=>student._id!==id)});
        });
        console.log(id);
    }
    Updatestudent(id){
        this.props.history.push(`/updateStudent/${id}`)
        console.log(id);
    }
    onClickDeleteTeacher(id) {
        confirmAlert({
          title: "Confirm to Delete",
          message: "Are you sure to delete this Student",
          buttons: [
            {
              label: "Yes",
              className: "button",
              onClick: () => this. DeleteStudent(id),
            },
            {
              label: "No",
              onClick: () =>  this.props.history.push('/viewStudent'),
            },
          ],
        });
      }
      onClickGeneratePDF(students) {
        confirmAlert({
          title: "Confirm to generate",
          message: "Are you sure to generate Student Report",
          buttons: [
            {
              label: "Yes",
              className: "button",
              onClick: () => this.generatePDF(students),
            },
            {
              label: "No",
              onClick: () =>  this.props.history.push('/viewStudent'),
            },
          ],
        });
      }

      generatePDF(students) {
        
        console.log(students);
        const doc = new jspdf();
        const tableColumn = [
          "Student ID",
          "Student Name",
          "Studnet NIC",
          "Gender",
          "Address",
          "Email",
          "ContactNo",
        
        ];
        const tableRows = [];
    
        students
          .slice(0)
          .reverse()
          .map((student) => {
            const studentData = [
              student.nic,
              student.stuName,
              student.nic,
              student.gender,
              student.address,
              student.email,
              student.mobile,
            
            ];
            tableRows.push(studentData);
          });
        doc.autoTable(tableColumn, tableRows, {
          styles: { fontSize: 8 },
          startY: 35,
        });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        doc.text("Student-Report", 14, 15).setFontSize(12);
        doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
        doc.save(`Student-Details-Report_${dateStr}.pdf`);
      }
    

    render(){
        let filterEmpId = this.state. students.filter((
            student)=>{
                return student.stuName.indexOf(this.state.
                    searchId)!==-1;
            }
        );

        return(
            <div>
                <Navbar/>

                <div id='student-search'>
                    <Search 
                        //loading={loading}
                        placeholder='Search...'
                        // onResultSelect={(e, data) =>
                        //     dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                        // }
                         onSearchChange={this.searchMenuId.bind(this)}
                        // results={results}
                         value={this.state.searchId}
                    />
                </div>
                <label id ='student-table-label'>Students List</label>
                <div className='student'>
                {colors.map((color) => (
                    <Table striped id='student-table'color={color} key={color}>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>NIC</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        {/* <Table.HeaderCell>Email</Table.HeaderCell> */}
                        <Table.HeaderCell>ContactNo</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {

                        filterEmpId.map(
                        student=>
                            <Table.Row key={student.nic}>
                                <Table.Cell>{student.stuName}</Table.Cell>
                                <Table.Cell>{student.nic}</Table.Cell>
                                <Table.Cell>{student.gender}</Table.Cell>
                                <Table.Cell>{student.address}</Table.Cell>
                                {/* <Table.Cell>{student.email}</Table.Cell> */}
                                <Table.Cell>{student.mobile}</Table.Cell>
                                <Table.Cell>
                                    <Button color="blue" type='viewmore' size='small' onClick={()=>this.viewSingleStudent(student._id)}>View More</Button>
                                    <Button color="teal" type='update' size='small' onClick={()=>this.Updatestudent(student._id)}>Update</Button>
                                    <Button color="red" type='delete' size='small' onClick={()=>this.onClickDeleteTeacher(student._id)}>Delete</Button>
                                
                                </Table.Cell>
                            </Table.Row>
                        )
                    }
                        
                    </Table.Body>
                    <Table.Footer fullWidth>
                        <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='6'>
                            <Button
                            floated='right'
                            icon
                            labelPosition='left'
                            primary
                            size='small'
                            onClick={(e) => {
                                this.onClickGeneratePDF(this.state.students);
                              }}
                            >
                            <Icon name='file pdf' /> Generate Report
                            </Button>
                        
                        </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                    </Table>
                ))}
                </div>


            </div>
        )

    }

}
export  default withRouter(ViewStudents);