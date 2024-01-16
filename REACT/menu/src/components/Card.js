import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MenuCard = ({ menuItems }) => {
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {menuItems.map((item) => (
        <Col key={item.id}>
          <Card style={{ width: "20rem", height: "60%", marginTop: 20, marginLeft: 60 }}>
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.name}
              style={{ height: "50%", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MenuCard;
