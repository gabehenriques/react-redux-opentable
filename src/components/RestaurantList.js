import React from "react";
import RestaurantDetails from "./RestaurantDetails";
import { Container, Row, Col } from "react-bootstrap";

const RestaurantList = (props) => {
  const city = props.city;
  const restaurants = props.restaurants;
  const isLoading = props.isFetching;

  let restaurantItem;

  if (restaurants && restaurants.length > 0 && city) {
    restaurantItem = restaurants.map((restaurant) => {
      return (
        <Col sm="6" md="4" className="mb-5" key={restaurant.id}>
          <RestaurantDetails restaurant={restaurant} />
        </Col>
      );
    });
  } else if (restaurants && city && isLoading) {
    restaurantItem = `Loading...`;
  } else if (restaurants && city) {
    const inputCity = city.charAt(0).toUpperCase() + city.slice(1);
    restaurantItem = `Sorry, we haven't found any restaurants in ${inputCity}.`;
  }
  return (
    <Container className="mt-5">
      <Row>{restaurantItem}</Row>
    </Container>
  );
};

export default RestaurantList;
