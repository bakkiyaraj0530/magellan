/**
*
* DrugPriceInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DrugPriceInfoStyles from './drug-price-info-styles';
import DrugSearchInput from '../../components/DrugSearchInput';
import messages from './messages';
import arrowUp from '../../assets/icons/arrow.svg';
import arrowDown from '../../assets/icons/arrowdown.svg';
import sortActive from '../../assets/icons/sort.svg';
import sortInActive from '../../assets/icons/sort-innactive.svg';
import LoadingDots from '../../components/LoadingDots';

class DrugPriceInfo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selectedDrug: '',
      isActive: true,
    };
  }
  getMoreInfo = (id) => {
    this.props.actions.setAccordionState(id);
  }
  priceFemale = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  }
  displayDrugIfo = (drugInfo) => {
    const collapseId = `collapse${drugInfo.id}`;
    const collapeseCls = drugInfo.isCollapsed ? 'panel-collapse priceexpanded-content' : 'panel-collapse collapse priceexpanded-content';
    return (
      <div id={collapseId} className={collapeseCls} role="tabpanel">
        <div className="panel-body price-panel">
          <div className="hidden-xs col-sm-12 col-md-12 col-lg-12 price-panel-head">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2"><p>PHARMACY</p></div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><p>BRAND PRICE</p></div>
            <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2"><p>GENERIC PRICE</p></div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><p>QUANTITY</p></div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 price-network">
            <div className="hidden-xs col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2"><p className="price-network-txt">In-Network Pharmacy</p></div>
            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 title-attr mobile-attr" data-title="BRAND PRICE"><p>$14.00</p></div>
            <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 title-attr mobile-attr" data-title="GENERIC PRICE"><p>$12.00</p></div>
            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 title-attr mobile-attr" data-title="QUANTITY"><p>30</p></div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 price-network">
            <div className="hidden-xs col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2"><p className="price-network-txt">Mail Order Pharmacy</p></div>
            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 title-attr mobile-attr" data-title="BRAND PRICE"><p>$22.50</p></div>
            <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 title-attr mobile-attr" data-title="GENERIC PRICE"><p>$20.50 <span className="best-price">Best Price</span></p></div>
            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 title-attr mobile-attr" data-title="QUANTITY"><p>90</p></div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const drugPriceArr = this.props.drugPriceInfo;
    const isDrugInfo = true;
    const listItems = drugPriceArr.length ? drugPriceArr.map((data) => (
      <li className="panel panel-default clearfix" key={data.gsn}>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 cm-left">
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-5" data-title="FORM">{data.dosageFormDesc}</div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4" data-title="STRENGTH">{data.strength}</div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 title-attr" data-title="TIER LEVEL">2</div>
        </div>
        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 cm-right">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6 title-attr pay-lbl" data-title="LIMITS/RESTRICTIONS">{data.genName}</div>
          <div className="col-xs-12 col-sm-2 col-md-3 col-lg-3 title-attr rejected" data-title="COVERED">Yes</div>
          <div className="hidden-xs col-sm-2 col-md-3 col-lg-3 price">
            <a data-toggle="collapse" className="more-info" data-parent="#accordion" href={undefined} onClick={() => this.getMoreInfo(data.gsn)} aria-expanded="true">
              <FormattedMessage {...messages.price} />
              {data.isCollapsed && <span className="accarrow down-arrow" aria-hidden="false"><img src={arrowDown} alt="sort Icon" /></span>}
              {!data.isCollapsed && <span className="accarrow down-arrow" aria-hidden="false"><img src={arrowUp} alt="sort Icon" /></span>}
            </a>
          </div>
        </div>
        <div className="col-xs-12 hidden-sm hidden-md hidden-lg price">
          <a data-toggle="collapse" className="more-info" data-parent="#accordion" href={undefined} onClick={() => this.getMoreInfo(data.gsn)} aria-expanded="true">
            <FormattedMessage {...messages.price} />
            {data.isCollapsed && <span className="accarrow down-arrow" aria-hidden="false"><img src={arrowDown} alt="sort Icon" /></span>}
            {!data.isCollapsed && <span className="accarrow down-arrow" aria-hidden="false"><img src={arrowUp} alt="sort Icon" /></span>}
          </a>
        </div>
        {this.displayDrugIfo(data)}
      </li>
    )) : '';
    return (
      <DrugPriceInfoStyles>
        <div className="container">
          <div className="price-drugpage-con">
            <h1><FormattedMessage {...messages.priceADrug} /></h1>
            <div className="price-searchpage-con">
              <DrugSearchInput drugList={this.props.drugList} isDrugInfo={isDrugInfo} actions={this.props.actions} />
            </div>
          </div>
          <div className="price-table-container">
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <p className="price-table-head">{this.props.drugName}</p>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                {this.state.isActive ? (<p className="price-age-txt"><FormattedMessage {...messages.priceFemaleAge} />
                  <a href={undefined} onClick={this.priceFemale} >
                    <span className="price-ageedit-icon" aria-hidden="false"><img src={sortActive} alt="sort active" /></span>
                  </a>
                </p>)
                : (<div className="price-age-container">
                  <div>
                    <span>Priced for</span>
                    <span>
                      <input type="text" id="female" />
                    </span>
                    <span>aged</span>
                    <span>
                      <input type="text" id="female" />
                    </span>
                    <span>years old</span>
                    <a href={undefined} onClick={this.priceFemale} ><span className="price-agetick-icon" aria-hidden="false"><img src={sortInActive} alt="sort in-active" /></span></a>
                  </div>
                </div>)}
              </div>
            </div>
            <div className="price-table-details">
              <div className="row price-table-ipad">
                <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                  <fieldset className="price-fieldset">
                    <label htmlFor="take"><FormattedMessage {...messages.priceITake} /></label>
                    <input type="text" id="take" />
                  </fieldset>
                </div>
                <div className="col-xs-7 col-sm-3 col-md-3 col-lg-3">
                  <fieldset className="price-fieldset">
                    <label htmlFor="unit"><FormattedMessage {...messages.priceUnit} /></label>
                    <input type="text" id="unit" />
                  </fieldset>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                  <fieldset className="price-fieldset price-fieldset-ipad">
                    <label htmlFor="retail"><FormattedMessage {...messages.priceRetailQuantity} />:</label>
                    <input type="text" id="retail" />
                  </fieldset>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                  <fieldset className="price-fieldset price-fieldset-ipad">
                    <label htmlFor="mail"><FormattedMessage {...messages.priceMailOrder} />:</label>
                    <input type="text" id="mail" />
                  </fieldset>
                </div>
                <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1">
                  <p className="price-update-txt"><FormattedMessage {...messages.priceUpdate} /></p>
                </div>
              </div>
            </div>
            <div className="price-tablepanel">
              <ul className="price-list panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <li className="pricelist-head clearfix">
                  <div className="hidden-xs col-sm-5 col-md-5 col-lg-5 cm-left">
                    <div className="col-sm-3 col-md-3 col-lg-5"><span><FormattedMessage {...messages.priceFrom} /></span></div>
                    <div className="col-sm-5 col-md-5 col-lg-4"><span><FormattedMessage {...messages.priceStrength} /></span></div>
                    <div className="col-sm-4 col-md-4 col-lg-3"><span><FormattedMessage {...messages.priceTierLevel} /></span></div>
                  </div>
                  <div className="hidden-xs col-sm-7 col-md-7 col-lg-7 cm-right">
                    <div className="col-sm-8 col-md-6 col-lg-6"><span><FormattedMessage {...messages.priceLimits} /></span></div>
                    <div className="col-sm-2 col-md-3 col-lg-3"><span><FormattedMessage {...messages.priceCovered} /></span></div>
                    <div className="col-sm-2 col-md-3 col-lg-3"></div>
                  </div>
                </li>
                { this.props.isLoading ?
                  <div className="text-center"><LoadingDots /></div> : ''}
                {listItems}
              </ul>
            </div>
          </div>
        </div>
      </DrugPriceInfoStyles>
    );
  }
}

DrugPriceInfo.propTypes = {
  drugList: PropTypes.array.isRequired,
  drugPriceInfo: PropTypes.array.isRequired,
  drugName: PropTypes.string,
  actions: PropTypes.object,
  isLoading: PropTypes.bool,
};

DrugPriceInfo.defaultProps = {
  actions: PropTypes.object,
  drugName: '',
  isLoading: false,
};

export default DrugPriceInfo;
