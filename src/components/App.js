import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import RestaurantContainer from "./RestaurantContainer";

function App() {
  return (
    <Container className="p-3">
      <RestaurantContainer />
    </Container>
  );
}

export default App;
