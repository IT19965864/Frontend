import React from "react";
import Navbar from "../components/StuMarksNavBar";
import { Card, Icon, Image } from "semantic-ui-react";
import "../styles/studentmark.css";
function StuMarkAdminProfile(props) {
  return (
    <>
      <Navbar />

      <Card id="admincard">
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Manoja</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2022</span>
          </Card.Meta>
          <Card.Description>Email:resultadmin@gmail.com</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Student Marks Admin
          </a>
        </Card.Content>
      </Card>
    </>
  );
}

export default StuMarkAdminProfile;
