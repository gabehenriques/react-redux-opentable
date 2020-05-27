import fetch from "cross-fetch";
export const REQUEST_RESTAURANTS = "REQUEST_RESTAURANTS";
export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const SELECT_CITY = "SELECT_CITY";
export const INVALIDATE_CITY = "INVALIDATE_CITY";

export const ADDRESS_DATA = "ADDRESS_DATA";

export const selectCity = (city) => {
  return {
    type: SELECT_CITY,
    city,
  };
};

export const invalidateCity = (city) => {
  return {
    type: INVALIDATE_CITY,
    city,
  };
};

export const requestRestaurants = (city, address) => {
  return {
    type: REQUEST_RESTAURANTS,
    city,
    address,
  };
};

export const receiveRestaurants = (city, address, json) => {
  return {
    type: RECEIVE_RESTAURANTS,
    city,
    address,
    restaurants: json.restaurants,
    receivedAt: Date.now(),
  };
};

const fetchRestaurants = (city, address) => {
  return (dispatch) => {
    dispatch(requestRestaurants(city, address));
    return fetch(
      `https://opentable.herokuapp.com/api/restaurants?city=${city}&&per_page=100`
    )
      .then((response) => response.json())
      .then((json) => dispatch(receiveRestaurants(city, address, json)));
  };
};

const shouldRestaurants = (state, city, address) => {
  const restaurants = state.restaurantsByCity[city];
  if (!restaurants) {
    return true;
  } else if (restaurants.isFetching) {
    return false;
  } else {
    return restaurants.didInvalidate;
  }
};

export const fetchRestaurantsIfNeeded = (city, address) => {
  return (dispatch, getState) => {
    if (shouldRestaurants(getState(), city, address)) {
      return dispatch(fetchRestaurants(city, address));
    }
  };
};
