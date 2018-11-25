/**
*
* Graph
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Chart, Doughnut } from 'react-chartjs-2';
import { injectIntl, intlShape } from 'react-intl';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const mobBrkPoint = (window.innerWidth < 767);
class Graph extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.setState({ graphText: (this.props.isDashboard || mobBrkPoint) ? '' : `TOTAL $${this.props.intl.formatNumber(this.props.totalValue)}` });
    Chart.pluginService.register({
      beforeDraw(chart) {
        if (chart.config.options.elements.center) {
      // Get ctx from string
          const ctx = chart.chart.ctx;

      // Get options from the center object in options
          const centerConfig = chart.config.options.elements.center;
          const fontStyle = centerConfig.fontStyle || 'Arial';
          const txt = centerConfig.text;
          const color = centerConfig.color || '#000';
          const sidePadding = centerConfig.sidePadding || 20;
          const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
      // Start with a base font of 30px
          ctx.font = `30px ${fontStyle}`;

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          const stringWidth = ctx.measureText(txt).width;
          const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
          const widthRatio = elementWidth / stringWidth;
          const newFontSize = Math.floor(42 * widthRatio);
          const elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
          const fontSizeToUse = Math.min(newFontSize, elementHeight);

      // Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = `${fontSizeToUse}px ${fontStyle}`;
          ctx.fillStyle = color;
      // Draw text in center
          ctx.fillText(txt, centerX, centerY);
        }
      },
    });
  }

  render() {
    const data = {
      datasets: [{
        data: this.props.data,
        backgroundColor: [
          '#509E2F',
          '#004B98',
        ],
      }],
    };

    const options = {
      hover: { mode: null },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        center: {
          text: this.state.graphText,
          color: '#004B98', // Default black
          fontStyle: 'Ubuntu', // Default Arial
          sidePadding: mobBrkPoint ? 10 : this.props.spaceVal.sidePadding, // Default 20 (as a percentage)
        },
      },
      cutoutPercentage: mobBrkPoint ? 40 : this.props.spaceVal.cutoutPercentage,
    };
    return (
      <div>
        <Doughnut ref={(c) => { this.chart = c; }} data={data} options={options} />
      </div>
    );
  }
}

Graph.propTypes = {
  data: PropTypes.array.isRequired,
  totalValue: PropTypes.string.isRequired,
  isDashboard: PropTypes.bool,
  spaceVal: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

Graph.defaultProps = {
  isDashboard: PropTypes.bool,
};

Graph.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};
export default injectIntl(Graph);
