import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleAddressChange = this.handleCityChange.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(event);
  };

  handleCityChange = (event) => {
    this.props.onChangeCity(event.target.value);
  };

  handleAddressChange = (event) => {
    this.props.onChangeAddress(event.target.value);
  };

  render() {
    return (
      <Row>
        <Col>
          <Form onSubmit={this.handleSubmit} className="form-inline row mt-5">
            <FormGroup className="col-12 col-md-4">
              <Form.Control
                type="text"
                name="cityName"
                className="mb-2 mr-md-2 w-100"
                placeholder="City"
                onChange={this.handleCityChange}
              />
            </FormGroup>

            <FormGroup className="col-12 col-md-4">
              <Form.Control
                type="text"
                name="address"
                className="mb-2 mr-md-2 w-100"
                placeholder="Address, Name or Area"
                onChange={this.handleAddressChange}
              />
            </FormGroup>

            <Button
              className="col-6 col-md-2 mb-2 w-50 mx-auto mx-md-2"
              color="primary"
              type="submit"
            >
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default FormContainer;
