import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

class Keypad extends Component {
  render() {
    const {value, onClick } = this.props;
    return (
      <Col xs={4} >
        <Button
          bsSize="large"
          onClick={onClick}
        >{value}</Button>
      </Col>
    );
  }
}

export default Keypad;
