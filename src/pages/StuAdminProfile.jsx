import React from 'react'
import Navbar from '../components/StuNavBar'
import { Card, Icon, Image } from 'semantic-ui-react'
import '../styles/student.css';
function StuAdminProfile(props) {
  return (
    <>
     <Navbar/>

     <Card id="admincard">
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Malindu</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2022</span>
      </Card.Meta>
      <Card.Description>
        Email:malindujethaka@gmail.com
      </Card.Description>
     
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Student Admin
      </a>
    </Card.Content>
  </Card>
    </>
  );
   
  
}

export default StuAdminProfile

