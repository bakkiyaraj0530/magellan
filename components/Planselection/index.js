/* eslint-disable */
/**
*
* Planselection
*
*/
import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PlanselectionStyles from './Planselection';
const globalHealth = require('./images/GLBH-Logo.svg');

class Planselection extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
   super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggleViewIDModal(plan) {
	    // e.preventDefault();
	    const id = 'dashIDModal';
	    const modal = document.getElementById(id);
	    const modalBG = document.getElementById('modal-background');
	    if (modal.className.includes('in')) {
	      const tmpClass = modal.className.replace('in', '');
	      modal.className = tmpClass;
	      modal.style.display = 'block';
	      modalBG.style.display = 'block';
	    } else {
	      modal.className += ' in';
	      modal.style.display = 'block';
	      modalBG.style.display = 'block';
	    }
      window.localStorage.setItem('selectedPlan', plan);
  }
    toggle() {
	    this.setState({
	      modal: !this.state.modal
	    });
  	}
  render() {
    return (
     <PlanselectionStyles>
		<div className="mb-3">
  			<div className="row plan-bottom-line">
  				<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
  					<img src={globalHealth} alt="GlobalHealth Logo" className="header-logo" />
  				</div>
  			</div>

        <div className="plan-content-area">
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="well text-center well-center">
                    <div className="well-body">
                      <h4 className="well-title"><FormattedMessage {...messages.federal_emp} /> – <FormattedMessage {...messages.federal_high} /></h4>
                      <a href="#" className="btn btn-primary" data-toggle="modal" onClick={() => this.toggleViewIDModal('fedHighOption')}  id="fedHighOption"><FormattedMessage {...messages.selectplan} /></a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="well text-center well-center">
                    <div className="well-body">
                      <h4 className="well-title"><FormattedMessage {...messages.federal_emp} /> – <FormattedMessage {...messages.federal_std} /></h4>
                      <a href="#" className="btn btn-primary" data-toggle="modal" onClick={() => this.toggleViewIDModal('fedStandardOption')} id="fedStandardOption"><FormattedMessage {...messages.selectplan} /></a>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="well text-center well-center">
                    <div className="well-body">
                      <h4 className="well-title"><FormattedMessage {...messages.oklahoma} /></h4>
                      <a href="#" className="btn btn-primary" data-toggle="modal" onClick={() => this.toggleViewIDModal('fedStandardOption')} id="fedStandardOption"><FormattedMessage {...messages.selectplan} /></a>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="well text-center well-center">
                    <div className="well-body">
                      <h4 className="well-title"><FormattedMessage {...messages.globalplatinum} /></h4>
                      <a href="#" className="btn btn-primary" data-toggle="modal" onClick={() => this.toggleViewIDModal('platinumPlan')} id="platinumPlan"><FormattedMessage {...messages.selectplan} /></a>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div className="well text-center well-center">
                    <div className="well-body">
                      <h4 className="well-title"><FormattedMessage {...messages.globalgold} /></h4>
                      <a href="#" className="btn btn-primary" data-toggle="modal" onClick={() => this.toggleViewIDModal('goldPlan')} id="goldPlan"><FormattedMessage {...messages.selectplan} /></a>
                    </div>
                  </div>
                </div>
              </div>
          </div>

        </div>
  	</div>


	  </PlanselectionStyles>
    );
  }
}

Planselection.propTypes = {

};

export default Planselection;
