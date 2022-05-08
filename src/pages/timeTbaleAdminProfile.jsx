import React from "react";
import Navbar from "../components/TimetableNav";
import "../styles/student.css";
import { Card, Icon, Image } from "semantic-ui-react";

function timeTbaleAdminProfile() {
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
          <Card.Header>Sajana</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2021</span>
          </Card.Meta>
          <Card.Description>Email:sajanaran@gmail.com</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Timetable Admin
          </a>
        </Card.Content>
      </Card>
    </>
  );
}

export default timeTbaleAdminProfile;
