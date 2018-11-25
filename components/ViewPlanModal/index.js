/*eslint-disable*/
/**
*
* ViewPlanModal
*
*/

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import styled from 'styled-components';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import SelectList from 'react-widgets/lib/SelectList';
import messages from './messages';
import IdForm from './view-id-form';
import IdModal from './view-id-modal';
import MedicareLogo from './logo_medicare-partD_medicarerx.png';
import CloseIcon from './close-icon';
import Button from '../Button';
import SelectOption from '../SelectOption';
class ViewPlanModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
	super(props);

	this.state = {
	  modalID: this.props.modalID,
	  clearable: false,
	  searchable: false,
	  // userInfo: this.props.userInfo,
	};
	this.toggleModal = this.toggleModal.bind(this);
	// this.doSubmit = this.doSubmit.bind(this);
  }
  toggleModal = (e) => {
	e.preventDefault();
	const id = this.state.modalID;
	const modal = document.getElementById(id);
	const modalBG = document.getElementById('modal-background');
	const tmpClass = modal.className.replace('in', '');
	modal.className = tmpClass;
	modal.style.display = 'none';
	modalBG.style.display = 'none';
  }
   applymodalBGcolor() {
   	  const modalBG = document.getElementById('modal-background');
   	  modalBG.style.display = 'block';
   }
  render() {
  	const { handleSubmit } = this.props;
 	const options = [
      { value: '{"min":0,"max":2}', label: '0-2' },
      { value: '{"min":3,"max":4}', label: '3-4' },
      { value: '{"min":4,"max":5}', label: '4-5' },
      { value: '{"min":6,"max":6}', label: '6' },
      { value: '{"min":7,"max":10}', label: '7-10' },
      { value: '{"min":11,"max":12}', label: '11-12' },
      { value: '{"min":13,"max":13}', label: '13' },
      { value: '{"min":14,"max":16}', label: '14-16' },
      { value: '{"min":17,"max":17}', label: '17' },
      { value: '{"min":18,"max":18}', label: '19-34' },
      { value: '{"min":19,"max":34}', label: '35-40' },
      { value: '{"min":14,"max":16}', label: '14-16' },
      { value: '{"min":17,"max":17}', label: '17' },
      { value: '{"min":18,"max":18}', label: '19-34' },
      { value: '{"min":19,"max":34}', label: '35-40' },
    ];

	const ModalBackground = styled.div`
		background-color: black;
		height: 100%;
		width: 100%;
		opacity: .4!important;
		display:none;
  `;
	return (
	  <div>
		  <ModalBackground id="modal-background" className="modal fade in"></ModalBackground>
		 	<IdModal className="modal" id={this.state.modalID} tabIndex="-1" role="dialog" aria-labelledby="viewdivLabel">
				<form onSubmit={handleSubmit} className="form-horizontal">
		        <div className="modal-dialog" role="document">
	            <div className="modal-content">
					<div className="modal-header">
		            <div className="row">
		              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 pl0">
		                    <h5 className="modal-title" id="planSelectionModalLabel"><FormattedMessage {...messages.moreinfo} /></h5>
		                </div>
		                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
		                  <button type="button" className="close" data-dismiss="modal" onClick={this.toggleModal} aria-label={<FormattedMessage {...messages.moreinfo} />} >
		                  <span aria-hidden="true">&times;</span>
		                  </button>
		                </div>
		              </div>
		            </div>
					</div>
					<div className="modal-body">
						<h6>To help us accurately determine coverage and pricing information please provide the following information.</h6>
						 <div className="form-group">
							  <p><strong><FormattedMessage {...messages.gender} /></strong></p>
							  <div className="form-check form-check-inline">
  								<div className="form-check-laclassNameel">
  									<label>
  									<Field name="gender" component="input" onClick={this.applymodalBGcolor} type="radio" value="male" checked /> <FormattedMessage {...messages.male} /></label>
            						<label><Field name="gender" component="input" onClick={this.applymodalBGcolor} type="radio"  value="female" /> <FormattedMessage {...messages.female} /></label>
  								 </div>
							  </div>
							</div>
							<div className="form-group plan-age-range">
								<label><FormattedMessage {...messages.agerange} /></label>
								<Field
					                id="ageRange"
					                placeholder={this.context.intl.formatMessage(messages.agerange)}
					                component={SelectOption}
					                value={this.state.value}
					                options={options}
					                simpleValue
					                clearable={this.state.clearable}
					                searchable={this.state.searchable}
					                name="ageRange"
					                onChange={this.applymodalBGcolor}
              					/>
							</div>
						</div>
						<div className="modal-footer plan-popup-btn">
						   <button type="button" className="btn btn-primary plan-clear-btn" onClick={this.toggleModal} ><FormattedMessage {...messages.close} /></button>
						   <button type="submit" className="btn btn-primary plan-continue-btn" ><FormattedMessage {...messages.continue} /></button>
						</div>
					</div>
		          </div>
		      </form>
		    </IdModal>
	    </div>
	);
  }
}

ViewPlanModal.propTypes = {
	modalID: React.PropTypes.string,
	handleSubmit: React.PropTypes.func,
	actions: React.PropTypes.object,
	dispatch: React.PropTypes.func,
};

ViewPlanModal.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

// const ViewPlanModalIntl = injectIntl(ViewPlanModal);

export default reduxForm({
  form: 'planselection',
  fields: ['gender', 'ageRange'],
})(ViewPlanModal);


// const planInfoselector = formValueSelector('planselection');

// const ViewPlanModalReduxFormone = connect(
//   (state) => {
//     const { gender, ageRange } = planInfoselector(state, 'gender', 'ageRange');
// 	return { gender, ageRange };
//   }
// )(ViewPlanModalReduxForm);

//  ViewPlanModalReduxFormone;
