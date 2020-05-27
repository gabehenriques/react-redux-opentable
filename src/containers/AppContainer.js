import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectCity,
  fetchRestaurantsIfNeeded,
  invalidateCity,
} from "../actions";
import RestaurantList from "../components/RestaurantList";
import FormContainer from "./FormContainer";
import { getVisibleRestaurants } from "../selector";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedCity !== prevProps.selectedCity) {
      const { dispatch, selectedCity } = this.props;
      dispatch(fetchRestaurantsIfNeeded(selectedCity));
    }
  }

  handleSubmit = (state) => {
    const selectedCity = state.city;
    const selectedAddress = state.address;
    this.props.dispatch(selectCity(selectedCity));
    this.props.dispatch(invalidateCity(selectedCity));
    this.props.dispatch(
      fetchRestaurantsIfNeeded(selectedCity, selectedAddress)
    );
  };

  render() {
    const { selectedCity, restaurants, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Container>
          <FormContainer onSubmit={this.handleSubmit} />
          <RestaurantList restaurants={restaurants} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedCity, restaurantsByCity } = state;
  let { isFetching, lastUpdated, restaurants } = restaurantsByCity[
    selectedCity
  ] || {
    isFetching: true,
    restaurants: [],
  };

  if (selectedCity) {
    restaurants = getVisibleRestaurants(restaurantsByCity[selectedCity]);
  }

  return {
    selectedCity,
    restaurants,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(AppContainer);
