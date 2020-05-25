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

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedCity } = this.props;
  }

  handleCityChange = (selectedCity) => {
    console.log(selectedCity);
    //this.props.dispatch(invalidateCity(selectedCity));
    //this.props.dispatch(fetchRestaurantsIfNeeded(selectedCity));
  };

  handleAddressChange = (selectedAddress) => {
    console.log(selectedAddress);
    //this.props.dispatch(invalidateCity(selectedAddress));
    //.props.dispatch(fetchRestaurantsIfNeeded(selectedAddress));
  };

  render() {
    const { selectedCity, restaurants, isFetching, lastUpdated } = this.props;

    return (
      <div>
        <FormContainer
          onSubmit={this.handleSubmit}
          onChangeCity={this.handleCityChange}
          onChangeAddress={this.handleAddressChange}
        />
        <Container>
          <RestaurantList restaurants={restaurants} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedCity, restaurantsByCity } = state;
  const { isFetching, lastUpdated, restaurants } = restaurantsByCity[
    selectedCity
  ] || {
    isFetching: true,
    items: [],
  };

  return {
    selectedCity,
    restaurants,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(AppContainer);
