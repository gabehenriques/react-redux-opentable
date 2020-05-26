import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      address: "",
      error: "",
    };
  }

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { city, address, error } = this.state;

    if (!city) {
      this.setState({
        error: "Please enter a city name",
      });
    } else {
      this.setState({
        error: "",
      });

      this.props.onSubmit(this.state);
    }
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

            {this.state.error ? (
              <p className="text-danger">{this.state.error}</p>
            ) : null}
          </Form>
        </Col>
      </Row>
    );
  }
}

export default FormContainer;
