import React, { Component } from 'react';
import { Grid, Col, PageHeader } from 'react-bootstrap';

class Screen extends Component {

  render() {
    const {value} = this.props
    const style = {textAlign : 'right'}
    return (
      <Grid>
        <Col xs={12} >
          <PageHeader style={style}>{value}</PageHeader>
        </Col>
      </Grid>
    );
  }
}

Screen.propTypes = {
  value : React.PropTypes.number.isRequired
}
export default Screen;
