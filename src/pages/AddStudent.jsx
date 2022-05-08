import React from 'react';
import { useFormik } from 'formik';
import Navbar from '../components/StuNavBar';
import '../styles/student.css';
import { Button, Select, Form ,Dropdown} from 'semantic-ui-react'
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import studentService from '../adapters/studentService';
//import {useNavigate} from 'react-router-dom';
import SoloAlert from "soloalert";
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css'
//toast.configure()
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
 
]
const cancel = () => {
  window.location('/viewStudent');
}

function AddStudent() {

// let navigate=useNavigate();

 
//  const notify=()=>{
//   toast.warn('New Salary Details Added Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})

// }
const history = useHistory();

  const formik=useFormik({
    initialValues:{
      stuName:'',
      nic:'',
      gender:'',
      address:'',
      email:'',
      mobile:'',
     
  
    },
  
    validationSchema:Yup.object({
      stuName:Yup.string()
        .min(3,"Too Small")
        .max(30,"Input 30 characters or below")
        .matches(/^[A-Za-z ]*$/,"Please Enter Valid name")
        .required("*Required"),
      nic: Yup.string()
        .min(9)
        .max(12)
        .required('*Required'),
      gender:Yup.string()
        .required('*Required'),

      address: Yup.string()
        .min(10, "Input must be at least 10 characters")
        .max(30, "Input 15 characters or below")
        .required('*Required'),
      email:Yup.string()
        .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,"Please Enter Valid email address")
        .required('*Required'),
      mobile: Yup.string()
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
        .min(10)
        .max(10)
        .required('*Required'),
            

    }),
      onSubmit:values=>{
       studentService.insertStudents(values).then(()=>{
        confirmAlert({
          title: "Successfully Added!",
          buttons: [
            {
              label: "OK",
              onClick: () => {
                history.push('/viewStudent');
              },
            },
          ],
        });
        // notify(),
        

      });
      
    }

     
  });

  
  
  return (
    <>
        <Navbar/>
        <div>
      
        <Form id='student-form' onSubmit={formik.handleSubmit}>
        <label id ='student-form-label'>Add  Student</label>
          <Form.Field>
            <label>Student Name</label>
            <input
             placeholder='Student Name'
             id='stuName'
             name='stuName'
             type="text"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.stuName}
              />
            {formik.touched.stuName && formik.errors.stuName ? (
              <div style={{color: "red"}}>{formik.errors.stuName}</div>
            ) : null}

            
          </Form.Field>
         
          <Form.Field>
            <label>NIC</label>
            <input placeholder='NIC' 
            id='nic'
            name='nic'
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nic}
           
             />
            {formik.touched.nic && formik.errors.nic ? (
              <div style={{color: "red"}}>{formik.errors.nic}</div>
            ) : null}

  
          </Form.Field>
          <Form.Field>
          <label>Gender</label>
            <Dropdown
              selection
              options={options}
              placeholder='Gender'
              id='gender'
              name='gender'
              onChange={(_, { value }) => formik.setFieldValue("gender", value)}
              value={formik.values.gender}
              
            />
             {formik.touched.gender && formik.errors.gender ? (
              <div style={{color: "red"}}>{formik.errors.gender}</div>
            ) : null}


          </Form.Field>
      
            <Form.Field>
            <label>Address</label>
            <input placeholder='Address' 
            id='address'
            name='address'
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}

           
             />
              {formik.touched.address && formik.errors.address ? (
              <div style={{color: "red"}}>{formik.errors.address}</div>
            ) : null}
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' 
              id='email'
              name='email'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{color: "red"}}>{formik.errors.email}</div>
              ) : null}
            </Form.Field>
            <Form.Field>
              <label>Mobile</label>
              <input placeholder='Mobile'
              id='mobile'
              name='mobile'
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
            
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                  <div style={{color: "red"}}>{formik.errors.mobile}</div>
                ) : null}
            </Form.Field>
          {/* <Form.Field>
            <label>Grade</label>
            <input placeholder='Grade'
            type="text"
           />
          </Form.Field> */}
         
          <Button primary type='submit' size='small'>Submit</Button>
          <Button color="red"  size='small' onClick={() => history.push('/viewStudent')}>Cancel</Button>
        </Form>
      
        </div>
        
       
    </>
   
  );
  
  
  
  
}

export default AddStudent