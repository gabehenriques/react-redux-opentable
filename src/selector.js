import { createSelector } from "reselect";

const getRestaurants = (state) => state.restaurants;
const getRestaurantsFilter = (state) => state.address;

export const getVisibleRestaurants = createSelector(
  [getRestaurantsFilter, getRestaurants],
  (filter, restaurants) => {
    if (filter) {
      filter = filter.toLowerCase();

      return restaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(filter) ||
          restaurant.address.toLowerCase().includes(filter) ||
          restaurant.area.toLowerCase().includes(filter)
      );
    }

    return restaurants;
  }
);
