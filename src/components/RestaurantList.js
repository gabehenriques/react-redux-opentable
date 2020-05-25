import React from "react";
import RestaurantDetails from "./RestaurantDetails";
import { Container, Row, Col } from "react-bootstrap";

const RestaurantList = (props) => {
  console.log(props.restaurants);
  return (
    <Container>
      <Row>
        {props.restaurants && props.restaurants.length > 0
          ? props.restaurants.map((restaurant) => {
              return (
                <Col sm="6" md="4" className="mb-5" key={restaurant.id}>
                  <RestaurantDetails restaurant={restaurant} />
                </Col>
              );
            })
          : "No results found."}
      </Row>
    </Container>
  );
};

export default RestaurantList;