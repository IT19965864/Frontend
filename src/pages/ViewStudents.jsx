import { Component } from "react";
import studentService from "../adapters/studentService";
import Navbar from "../components/StuNavBar";
import { Table,Button,Icon } from 'semantic-ui-react'
import '../styles/student.css';

const colors = [
  
    'blue',
   
  ]
export default class ViewStudents extends Component{

    constructor(props){
        super(props)

        this.state={
            students:[],
        }
    }


    componentDidMount(){
       studentService.getAllStudents().then((res)=>{
            this.setState({students:res.data});
            //console.log(students);

        });
    }


    render(){

        return(
            <div>
                <Navbar/>
                <div className='student'>
                {colors.map((color) => (
                    <Table striped id='student-table'color={color} key={color}>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>NIC</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Contact</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {

                        this.state.students.map(
                        student=>
                            <Table.Row key={student.nic}>
                                <Table.Cell>{student.stuName}</Table.Cell>
                                <Table.Cell>{student.nic}</Table.Cell>
                                <Table.Cell>{student.gender}</Table.Cell>
                                <Table.Cell>{student.address}</Table.Cell>
                                <Table.Cell>{student.email}</Table.Cell>
                                <Table.Cell>{student.mobile}</Table.Cell>
                                <Table.Cell><Button secondary type='viewmore' size='small'>View More</Button></Table.Cell>
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