import React from "react";
import Navbar from "../components/TeacherNavBar";
import "../styles/student.css";
import { Card, Icon, Image } from "semantic-ui-react";

function StuAdminProfile() {
  return (
    <>
      <Navbar />

      <Card id="admincard">
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Malith</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2022</span>
          </Card.Meta>
          <Card.Description>Email:malithmenaka@gmail.com</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Teacher Admin
          </a>
        </Card.Content>
      </Card>
    </>
  );
}

export default StuAdminProfile;
