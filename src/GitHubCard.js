import React from "react"
import Card from "react-bootstrap/Card"
import profile_picture from './profile_picture.png'

function GitHubCard() {
    return (
        <div className="card">
          <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" src={profile_picture} />        
           <Card.Body>
              <Card.Title>Michael Manley</Card.Title>
              <Card.Text>
              I am an Executive Director for Senior Living.
              </Card.Text>
          </Card.Body>
          </Card>
        </div>
    );
}

export default GitHubCard