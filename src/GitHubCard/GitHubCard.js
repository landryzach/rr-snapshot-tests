import React from "react"
import Card from "react-bootstrap/Card"
import Mountains from './Mountains.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "40rem"}}>
        <Card.Img variant="top" src={Mountains} />
        <Card.Body>
            <Card.Title>Mountain Landscape</Card.Title>
            <Card.Text>
            I used a mountain landscape, because I do not have a profile picture on GitHub yet. 
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard