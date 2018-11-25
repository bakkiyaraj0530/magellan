/*
 *
 * StarRatings
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import StarRatingsStyles from './StarRatingsStyles';
import starIcon from './images/star.png';

export class StarRatings extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Star Ratings | MagellanRx Management"
          meta={[
            { name: 'description', content: 'Description of StarRatings' },
          ]}
        />
        <StarRatingsStyles>
          <div className="state-expanded-content top-border">
            <h1><FormattedMessage {...messages.header} /></h1>
            <div className="doc-leftright">
              <p><FormattedMessage {...messages.medicare} /></p>
              <ol>
                <li><FormattedMessage {...messages.scores} /></li>
                <li><FormattedMessage {...messages.summary} /></li>
              </ol>
              <p><FormattedMessage {...messages.include} /></p>
              <ul>
                <li><FormattedMessage {...messages.rate} /></li>
                <li><FormattedMessage {...messages.healthy} /></li>
                <li><FormattedMessage {...messages.medications} /></li>
              </ul>
              <p><FormattedMessage {...messages.star} /></p>
              <p className="L-space"><span className="doc-bold"><FormattedMessage {...messages.enough} /></span>
              </p>
              <p><FormattedMessage {...messages.received} /></p>
              <p className="L-space"><FormattedMessage {...messages.health} /> <span className="doc-bold"><FormattedMessage {...messages.offered} /></span>
                <br /> <FormattedMessage {...messages.drug} /> <span className="doc-bold"><FormattedMessage {...messages.measured} /></span>
              </p>
              <p><FormattedMessage {...messages.performs} /></p>
              <ul className="rading-list">
                <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.excellent} /></span>
                </li>
                <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.average} /></span>
                </li>
                <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.threestar} /></span>
                </li>
                <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.below} /></span>
                </li>
                <li><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.poor} /></span>
                </li>
              </ul>
              <p><span className="doc-bold"><FormattedMessage {...messages.contracts} /></span>
              </p>
              <p><FormattedMessage {...messages.plans} />
                <br /><a target="_blank" href="http://www.medicare.gov"><FormattedMessage {...messages.website} /></a>
              </p>
              <p><FormattedMessage {...messages.toll} />
                <br /> <FormattedMessage {...messages.members} /></p>
              <p><FormattedMessage {...messages.starratings} /></p>
            </div>
          </div>
        </StarRatingsStyles>
      </div>
    );
  }
}

export default (StarRatings);
