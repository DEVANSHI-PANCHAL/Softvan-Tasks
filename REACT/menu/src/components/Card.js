import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Card.css";

const MenuCard = ({ menuItems, onAddToCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleOrderClick = (item) => {
    if (cartItems.some((cartItem) => cartItem.id === item.id)) {
      toast.warning(`${item.name} is already in the cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } else {
      const itemWithQuantity = { ...item, quantity: 1 };

      setCartItems((prevItems) => [...prevItems, itemWithQuantity]);
      toast.success(`${item.name} added to the cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });

      if (onAddToCart) {
        onAddToCart(itemWithQuantity);
      }

      navigate("/cart");
    }
  };

  return (
    <div>
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
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#a53860",
                    transition: "background-color 0.3s ease",
                    borderColor:"pink"
                  }}
                  className="order-button"
                  onClick={() => handleOrderClick(item)}
                >
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuCard;
