import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Button from './Button';
import _ from 'lodash';
class Keypad extends Component {

  render() {
    return (
      <Grid >
        <Row className="show-grid">
          {_.range(10).map( x => <Button key={x} value={x}/>)}
        </Row>
      </Grid>
    );
  }
}

export default Keypad;
