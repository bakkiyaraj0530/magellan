/**
*
* GraphLegend
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';
import colors from '../HelperUtils/branding-colors';

const Circle = styled.div`
  border:1px solid  ${(props) => props.legendColor ? props.legendColor : colors.magellanblack};
  border-radius: 15px;
  width: ${(props) => props.legendStyle.width}px;
  height: ${(props) => props.legendStyle.height}px;
  background-color:${(props) => props.legendColor ? props.legendColor : colors.magellanblack};
`;

const LegendRow = styled.div`
  margin: 2rem 0;

  h5{
    color:${colors.magellandarkblue};
    margin:0px;
  }

  .legend-text{
    padding:0px;
  }
  .legend-col{
    padding:0px;
  }
`;

function GraphLegend(props) {
  return (
    <LegendRow className="row legend-row">
      <div className="legend-col col-sm-1 col-xs-2">
        <Circle legendColor={props.legendColor} legendStyle={props.legendStyle} />
      </div>
      <div className="legend-text col-sm-11 col-xs-10">
        <h5>{props.legendText}:<br className="hidden-sm hidden-md hidden-lg" /> $<FormattedNumber value={props.legendValue} /></h5>
      </div>
    </LegendRow>
  );
}

GraphLegend.propTypes = {
  legendText: PropTypes.object.isRequired,
  legendColor: PropTypes.string.isRequired,
  legendValue: PropTypes.string.isRequired,
  legendStyle: PropTypes.object.isRequired,
};

export default GraphLegend;
