import React from "react";
import { Card, Button } from "react-bootstrap";

const RestaurantDetails = (props) => {
  const restaurant = props.restaurant;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Subtitle>
          {restaurant.address}, {restaurant.city}{" "}
        </Card.Subtitle>
        <Card.Text>Price: {restaurant.price}</Card.Text>
        <Button href={restaurant.reserve_url}>Reserve</Button>
      </Card.Body>
    </Card>
  );
};

export default RestaurantDetails;
