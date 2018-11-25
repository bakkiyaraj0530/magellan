/* eslint prefer-template: "error" */
/**
*
* UserclaimHistory
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { convertClaimsHistoryObjectToArray } from '../../utils/utils';
import ClaimsDetailsStyles from './ClaimsDetailsStyles';
import messages from './messages';
import sortIcon from './image/sort.svg';
import arrowIcon from './image/arrow.svg';
import arrowUp from './image/arrowdown.svg';
import LoadingDots from '../../components/LoadingDots';
import ModalAlert from '../../components/ModalAlert';
const videoImage = require('./image/video.svg');

class ClaimsDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isSorting: false,
      isClaimServiceId: '',
      showModal: false,
      linkUrl: '',
    };
  }

  onHide = () => {
    this.setState({ showModal: false });
  }
  getMoreInfo(data) {
    this.state.isSorting = !this.state.isSorting;
    this.state.isClaimServiceId = data.healthServiceId;
    if (!data.moreInfo) {
      this.props.actions.getClaimHistoryMoreInfo(data.healthServiceId);
    } else {
      this.props.actions.setAccordionState(data.healthServiceId);
    }
  }

  sort(event, headerName) {
    event.preventDefault();
    this.state.isSorting = !this.state.isSorting;
    this.props.actions.sort(headerName, this.state.isSorting);
  }

  open = (url) => {
    this.setState({ showModal: true, linkUrl: url });
  }
  showLink = (url) => {
    this.onHide();
    window.open(url, '_blank');
  }

  displayMoreInfo = (moreInfo, id, status) => {
    const collapse = moreInfo.isCollapsed ?
       'panel-collapse collapse claimexpanded-content' : 'panel-collapse claimexpanded-content';
    const divIdmoreInfo = `collapse${id}`;
    const amtInsurancePaid = parseFloat(moreInfo.amtInsurancePaid).toFixed(2);
    const amtCopay = parseFloat(moreInfo.amtCopay).toFixed(2);
    const extraHelp = parseFloat(moreInfo.extraHelp).toFixed(2);
    const otherPayerAmt = parseFloat(moreInfo.otherPayerAmt).toFixed(2);
    return (<div id={divIdmoreInfo} className={collapse} role="tabpanel">
      <div className="panel-body">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-left">
          <p>{moreInfo.pharamcyName}</p>
          <p>
            <span>{`${moreInfo.pharamcyAddress}. `}</span>
            <span>{moreInfo.city ? `${moreInfo.city}, ` : ''}</span>
            <span>{`${moreInfo.state} `}</span>
            <span>{moreInfo.zip}</span>
          </p>
          <p x-ms-format-detection="none">{(moreInfo.phoneNumber && (moreInfo.phoneNumber).replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'))}</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-right">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pharmacy-id">
            <p x-ms-format-detection="none"><span><FormattedMessage {...messages.pharmacyid} /></span>{moreInfo.pharamcyId}</p>
            <p><span><FormattedMessage {...messages.rxnumber} /></span>{moreInfo.rxServiceNo}</p>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 quantity-count">
            <p><span><FormattedMessage {...messages.dayssupply} /></span>{moreInfo.daysSupply}</p>
            <p><span><FormattedMessage {...messages.quantity} /></span>{moreInfo.quantity}</p>
          </div>
        </div>
        { (status !== 'Denied' && status !== 'Rejected') ?
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 planing-list">
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost you-paid">
              <p><FormattedMessage {...messages.moreinfoyoupaid} /></p>
              <span className="mag-claim-amt">${amtCopay}</span>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost plan-paid">
              <p><FormattedMessage {...messages.planpaid} /></p>
              <span className="mag-claim-amt">${amtInsurancePaid}</span>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost extra-help">
              <p><FormattedMessage {...messages.extrahelp} /></p>
              <span className="mag-claim-amt">${extraHelp}</span>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost other-payer">
              <p><FormattedMessage {...messages.otherpayer} /></p>
              <span className="mag-claim-amt">${otherPayerAmt}</span>
            </div>
          </div>
        : ''
      }
      </div>
    </div>);
  };

  displayHeader = () => (
    <li className="hidden-xs claimlist-head clearfix">
      <div className="col-sm-7 col-md-7 col-lg-8 cm-left">
        <div className="col-sm-3 col-md-3 col-lg-3"><span className="mag-claim-sortTxt servicedate"><FormattedMessage {...messages.servicedate} /></span>
          {(!this.props.showhideSorting && !this.props.claimsHistory.isErrMsg) && <span><a href="" onClick={(event) => this.sort(event, 'dateOfService')}><img src={sortIcon} className="mag-claim-sortImg" alt="sort Icon" /></a></span> }
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6"><span className="mag-claim-sortTxt"><FormattedMessage {...messages.drugname} /></span>
          {(!this.props.showhideSorting && !this.props.claimsHistory.isErrMsg) && <span><a href="" onClick={(event) => this.sort(event, 'drugName')}><img src={sortIcon} className="mag-claim-sortImg" alt="sort Icon" /></a></span> }
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3"><span className="mag-claim-sortTxt"><FormattedMessage {...messages.pharmacy} /></span>
          {(!this.props.showhideSorting && !this.props.claimsHistory.isErrMsg) && <span><a href="" onClick={(event) => this.sort(event, 'serviceProvider')}><img src={sortIcon} className="mag-claim-sortImg" alt="sort Icon" /></a></span> }
        </div>
      </div>
      <div className="col-sm-5 col-md-5 col-lg-4 cm-right">
        <div className="col-sm-5 col-md-4 col-lg-4"><span className="mag-claim-sortTxt"><FormattedMessage {...messages.youpaid} /></span>
          {(!this.props.showhideSorting && !this.props.claimsHistory.isErrMsg) && <span><a href="" onClick={(event) => this.sort(event, 'copayAmount')}><img src={sortIcon} className="mag-claim-sortImg" alt="sort Icon" /></a></span> }
        </div>
        <div className="col-sm-3 col-md-5 col-lg-5"><span className="mag-claim-sortTxt status"><FormattedMessage {...messages.claimstatus} /></span>
          {(!this.props.showhideSorting && !this.props.claimsHistory.isErrMsg) && <span><a href="" onClick={(event) => this.sort(event, 'CLAIM_STATUS')}><img src={sortIcon} className="mag-claim-sortImg" alt="sort Icon" /></a></span> }
        </div>
        <div className="col-sm-4 col-md-3 col-lg-3"></div>
      </div>
    </li>);

  render() {
    const { claimsHistory, isLoading, vucaVideoList } = this.props;
    let claims = [];
    if (claimsHistory && claimsHistory.claimsHistory && claimsHistory.claimsHistory.claim) {
      claims = convertClaimsHistoryObjectToArray(claimsHistory.claimsHistory.claim);
    }
    const filterObj = (arr, data) => {
      const videoObj = arr.filter((val) => val.ndc === data.productId);
      return videoObj && videoObj[0] && videoObj[0].vucaVideo;
    };
    const listItems = claims.length ? claims.map((data) => (
      <li className="panel panel-default clearfix" key={data.id}>
        <div className="col-xs-8 col-sm-7 col-md-7 col-lg-8 cm-left" >
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 mnth-lbal">{data.dateOfService}</div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 video-lbl">
            {
              (Array.isArray(vucaVideoList) && filterObj(vucaVideoList, data) && <div className="video-panel hidden-xs"><a onClick={() => this.open(filterObj(vucaVideoList, data))} href="#vuca" title="Video"><img src={videoImage} alt="video" /></a></div>)
            }
            {data.drugName}
          </div>
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 pharm-lbl">{data.serviceProvider}</div>
        </div>
        <div className="col-xs-4 col-sm-5 col-md-5 col-lg-4 cm-right">
          <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 title-attr pay-lbl" data-title="YOU PAID">{data.copayAmount}</div>
          <div className={`col-xs-12 col-sm-3 col-md-5 col-lg-4 status ${data.claimStatusLower}`} data-title="CLAIM STATUS">{data.claimStatus}</div>
          <div className="hidden-xs col-sm-4 col-md-3 col-lg-4 moreinfo">
            {!data.moreInfo && <a data-toggle="collapse" className="more-info" href={undefined} onClick={() => this.getMoreInfo(data)} aria-expanded="true"><FormattedMessage {...messages.moreinfo} /><img src={arrowIcon} className="down-arrow" alt="sort Icon" /> </a> }
            {data.moreInfo && (data.moreInfo.isCollapsed === true) && <a data-toggle="collapse" className="more-info" href={undefined} onClick={() => this.getMoreInfo(data)} aria-expanded="true"><FormattedMessage {...messages.moreinfo} /><img src={arrowIcon} className="down-arrow" alt="sort Icon" /> </a>}
            { data.moreInfo && !data.moreInfo.isCollapsed && <a data-toggle="collapse" className="more-info" href={undefined} onClick={() => this.getMoreInfo(data)} aria-expanded="true"><FormattedMessage {...messages.lessinfo} /><img src={arrowUp} className="down-arrow" alt="sort Icon" /> </a> }
          </div>
        </div>
        <div className="col-xs-8 hidden-sm hidden-md hidden-lg moreinfo">
          {!data.moreInfo && <a data-toggle="collapse" className="more-info" href={undefined} onClick={() => this.getMoreInfo(data)} aria-expanded="true"><FormattedMessage {...messages.moreinfo} /><img src={arrowIcon} className="down-arrow" alt="sort Icon" /> </a> }
          {data.moreInfo && (data.moreInfo.isCollapsed === true) && <a data-toggle="collapse" className="more-info" href={undefined} onClick={() => this.getMoreInfo(data)} aria-expanded="true"><FormattedMessage {...messages.moreinfo} /><img src={arrowIcon} className="down-arrow" alt="sort Icon" /> </a>}
          { data.moreInfo && !data.moreInfo.isCollapsed && <a data-toggle="collapse" className="more-info" href={undefined} onClick={() => this.getMoreInfo(data)} aria-expanded="true"><FormattedMessage {...messages.lessinfo} /><img src={arrowUp} className="down-arrow" alt="sort Icon" /> </a> }
        </div>
        <div className="col-xs-4 hidden-sm hidden-md hidden-lg video-lbl">
          {
            (Array.isArray(vucaVideoList) && filterObj(vucaVideoList, data) && <div className="video-panel"><a onClick={() => this.open(filterObj(vucaVideoList, data))} href="#vuca" title="Video"><img src={videoImage} alt="video" /> <FormattedMessage {...messages.infovideo} /></a></div>)
          }
        </div>
        {this.props.claimsHistory.isVideoLoading && data.healthServiceId === this.state.isClaimServiceId ?
          <div className="col-xs-12"><p className="text-center"><LoadingDots /></p></div> :
          (data.moreInfo && this.displayMoreInfo(data.moreInfo, data.id, data.claimStatus))
        }
      </li>)
    ) : '';
    return (
      <ClaimsDetailsStyles><div className="claim-tablepanel clearfix">
        <ModalAlert showModal={this.state.showModal} onHide={this.onHide} linkUrl={this.state.linkUrl} showLink={this.showLink} />
        <ul className="claimhistory-list panel-group" id="accordion" >
          {this.displayHeader()}
          { isLoading ?
            <div className="text-center"><LoadingDots /></div> : (claimsHistory.isErrMsg && <li className="no-available-claims">{this.props.showhideSorting ? <FormattedMessage {...messages.norecentclaims} /> : <FormattedMessage {...messages.noclaims} />}</li>)}
          {listItems}
        </ul>
      </div></ClaimsDetailsStyles>
    );
  }
}

ClaimsDetails.propTypes = {
  claimsHistory: React.PropTypes.object,
  vucaVideoList: React.PropTypes.object,
  actions: React.PropTypes.func,
  showhideSorting: React.PropTypes.bool,
  isLoading: React.PropTypes.bool,
};
ClaimsDetails.defaultProps = {
  claimsHistory: React.PropTypes.object,
  vucaVideoList: React.PropTypes.object,
  moreinfoaction: React.PropTypes.func,
  actions: React.PropTypes.func,
  showhideSorting: false,
  isLoading: React.PropTypes.bool,
};
export default ClaimsDetails;
