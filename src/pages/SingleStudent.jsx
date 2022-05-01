
import React from 'react';
import Navbar from '../components/StuNavBar';
import '../styles/student.css';
import { Button, Card, Form ,Dropdown} from 'semantic-ui-react'
//import {useNavigate} from 'react-router-dom';
function ViewOneStudent() {

 // let navigate=useNavigate();
 

   return (
     <>
         <Navbar/>
         <div>
       
         <Form id='single-student-form' >
         <label id ='single-student-form-label'>Student Details</label>
        
         <Form.Field>
             <label><pre id='text'>Student Name: Malindu Jethaka</pre></label>
              
           </Form.Field>
          
           <Form.Field>
             <label><pre id='text'>NIC:                     199835710332</pre></label>
             
           </Form.Field>

           <Form.Field>
            <label><pre id='text'>Gender:              Male</pre></label>

           </Form.Field>
       
            <Form.Field>
              <label><pre id='text'>Address:             No 24,wewalketiya</pre></label>

            </Form.Field>

            <Form.Field>
              <label><pre id='text'>Email:                 malindujethaka@gmail.com</pre></label>
              
            </Form.Field>

             <Form.Field>
             <label><pre id='text'>ContactNo:       0767967190</pre></label>

             </Form.Field>
           {/* <Form.Field>
             <label>Grade</label>
             <input placeholder='Grade'
             type="text"
            />
           </Form.Field> */}
          <div id ="button">
            <Button primary type='submit' size='small' >OK</Button>
          </div>
           


           
       
           
           
         </Form>
       
         </div>
         
        
     </>
    
   );
   
   
   
   
 }
 
 export default ViewOneStudent