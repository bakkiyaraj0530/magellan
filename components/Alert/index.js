/**
*
* Alert
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function Alert(props) {
  return (
    <div className={`alert alert-${props.alertType}`}>
      {props.alertMessage}
    </div>
  );
}

Alert.propTypes = {
  alertType: PropTypes.string.isRequired,
  alertMessage: PropTypes.string.isRequired,
};

export default Alert;
