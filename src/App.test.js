import React from "react";
import * as actions from "./actions";

const MOCK_JSON_PAYLOAD = {
  restaurants: {
    address: "220 King Street West",
    area: "Toronto / SW Ontario",
    city: "Toronto",
    country: "CA",
    id: 112033,
    image_url: "https://www.opentable.com/img/restimages/112033.jpg",
    lat: 43.647258,
    lng: -79.38695,
    mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=112033",
    name: "El Caballito Tequila Bar",
    phone: "4166289838x",
    postal_code: "M5H 1K4",
    price: 2,
    reserve_url: "http://www.opentable.com/single.aspx?rid=112033",
    state: "ON",
  },
};

describe("actions", () => {
  const selectedCity = "Toronto";
  const mockAddress = "King St W";

  describe("selectCity", () => {
    it("should create selectCity action with a given city", () => {
      const expectedAction = {
        type: actions.SELECT_CITY,
        city: selectedCity,
      };
      expect(actions.selectCity(selectedCity)).toEqual(expectedAction);
    });
  });

  describe("invalidateCity", () => {
    it("should create invalidateCity action with a given city", () => {
      const expectedAction = {
        type: actions.INVALIDATE_CITY,
        city: selectedCity,
      };
      expect(actions.invalidateCity(selectedCity)).toEqual(expectedAction);
    });
  });

  describe("requestRestaurants", () => {
    it("should create requestRestaurants action with a given city", () => {
      const expectedAction = {
        type: actions.REQUEST_RESTAURANTS,
        city: selectedCity,
      };
      expect(actions.requestRestaurants(selectedCity)).toEqual(expectedAction);
    });
  });

  describe("receiveRestaurants", () => {
    it("should create receiveRestaurants action with a given city", () => {
      expect(
        actions.receiveRestaurants(selectedCity, mockAddress, MOCK_JSON_PAYLOAD)
      ).toMatchObject(MOCK_JSON_PAYLOAD);
    });
  });
});
