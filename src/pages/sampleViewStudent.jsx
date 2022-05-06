// import { Component } from "react";
// import teacherService from "../adapters/TeacherService";
// import Navbar from "../components/TeacherNavBar";
// import { Table, Button, Icon } from "semantic-ui-react";
// import "../styles/teacher.css";

// const colors = ["blue"];
// export default class ViewTeachers extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       teachers: [],
//     };
//   }

//   componentDidMount() {
//     teacherService.getAllTeachers.then((res) => {
//       this.setState({ teachers: res.data });
//       console.log(teachers);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Navbar />
//         <div className="teacher">
//           {colors.map((color) => (
//             <Table striped id="teacher-table" color={color} key={color}>
//               <Table.Header>
//                 <Table.Row>
//                   <Table.HeaderCell>Name</Table.HeaderCell>
//                   <Table.HeaderCell>NIC</Table.HeaderCell>
//                   <Table.HeaderCell>Gender</Table.HeaderCell>

//                   <Table.HeaderCell>Email</Table.HeaderCell>
//                   <Table.HeaderCell>Contact</Table.HeaderCell>
//                   <Table.HeaderCell>Subject</Table.HeaderCell>
//                   <Table.HeaderCell>Grade</Table.HeaderCell>
//                   <Table.HeaderCell>Action</Table.HeaderCell>
//                 </Table.Row>
//               </Table.Header>

//               <Table.Body>
//                 {this.state.teachers.map((teacher) => (
//                   <Table.Row key={teacher.nic}>
//                     <Table.Cell>{teacher.stuName}</Table.Cell>
//                     <Table.Cell>{teacher.nic}</Table.Cell>
//                     <Table.Cell>{teacher.gender}</Table.Cell>
//                     <Table.Cell>{teacher.address}</Table.Cell>
//                     <Table.Cell>{teacher.email}</Table.Cell>
//                     <Table.Cell>{teacher.mobile}</Table.Cell>
//                     <Table.Cell>
//                       <Button secondary type="viewmore" size="small">
//                         View More
//                       </Button>
//                     </Table.Cell>
//                   </Table.Row>
//                 ))}
//               </Table.Body>
//               <Table.Footer fullWidth>
//                 <Table.Row>
//                   <Table.HeaderCell />
//                   <Table.HeaderCell colSpan="6">
//                     <Button
//                       floated="right"
//                       icon
//                       labelPosition="left"
//                       primary
//                       size="small"
//                     >
//                       <Icon name="file pdf" /> Generate Report
//                     </Button>
//                   </Table.HeaderCell>
//                 </Table.Row>
//               </Table.Footer>
//             </Table>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
