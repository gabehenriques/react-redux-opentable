import React, { Component } from "react";
import RestaurantList from "./RestaurantList";
import { Container } from "react-bootstrap";

class RestaurantContainer extends Component {
  render() {
    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>;
    }
    return (
      <div>
        <Container>
          <RestaurantList restaurants={this.props.restaurants} />
        </Container>
      </div>
    );
  }
}

export default RestaurantContainer;
