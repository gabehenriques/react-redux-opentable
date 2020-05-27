import { combineReducers } from "redux";
import {
  REQUEST_RESTAURANTS,
  RECEIVE_RESTAURANTS,
  SELECT_CITY,
  INVALIDATE_CITY,
} from "./actions";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  restaurants: [],
};

const selectedCity = (state = "", action) => {
  switch (action.type) {
    case SELECT_CITY:
      return action.city;
    default:
      return state;
  }
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_CITY:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_RESTAURANTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_RESTAURANTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        city: action.city,
        address: action.address,
        restaurants: action.restaurants,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
};

const restaurantsByCity = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_CITY:
    case RECEIVE_RESTAURANTS:
    case REQUEST_RESTAURANTS:
      return Object.assign({}, state, {
        [action.city]: restaurants(state[action.city], action),
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  restaurantsByCity,
  selectedCity,
});

export default rootReducer;
