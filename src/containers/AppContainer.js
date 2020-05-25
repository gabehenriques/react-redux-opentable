import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectCity,
  fetchRestaurantsIfNeeded,
  invalidateCity,
} from "../actions";
// import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, selectedCity } = this.props;
  }

  componentDidUpdate(prevProps) {}

  handleChange() {}

  render() {
    const { selectedCity, restaurants, isFetching, lastUpdated } = this.props;

    return (
      <div>
        <Container>
          <RestaurantList restaurants={this.props.restaurants} />
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
