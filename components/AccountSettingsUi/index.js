/*eslint-disable*/
/**
*
* AccountSettingsUi
*
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import AccountSettingsEmailForm from '../AccountSettingsEmailForm'
import AccountSettingsPasswordForm from '../AccountSettingsPasswordForm'


class AccountSettingsUi extends React.Component { // eslint-disable-line react/prefer-stateless-function
 constructor() {
    super();
    this.state = {
      emailVisible:     false,
      passwordVisible:  false,
    }
   
  }
  
  _emailUpdate() {
    this.setState({emailVisible: !this.state.emailVisible});
    this.setState({passwordVisible: false})
  }
  _passwordUpdate(){
    this.setState({passwordVisible: !this.state.passwordVisible})
    this.setState({emailVisible: false})
  }
  render() {
   
    return (
      <div className="container">
        <div className="row">
          <div className="form-group ">
            <label className="col-sm-4 col-sm-offset-1 control-label acctSettingsLabel">Name :
            </label>
            <div className="col-sm-7">
              <span className="text-capitalize">{this.props.userInfo.userFirstName} 
                {this.props.userInfo.userLastName}</span>
            </div>
          </div>
        </div>
        <div className="row">
           <div className="form-group ">
            <label className="col-sm-4 col-sm-offset-1 control-label acctSettingsLabel">Address :
            </label>
            <div className="col-sm-7">
              <span className="text-capitalize"> {this.props.userInfo.memberAddress.address1}
            
                {this.props.userInfo.memberAddress.address2}<br/>
                {this.props.userInfo.memberAddress.city}, &nbsp;
                {this.props.userInfo.memberAddress.state}<br/>
                {this.props.userInfo.memberAddress.zip}
              
                </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group ">
            <label className="col-sm-4 col-sm-offset-1 control-label acctSettingsLabel">Default Pharmacy :
            </label>
            <div className="col-sm-7">
              <span className="text-capitalize"> {this.props.userInfo.userFirstName}
              <Link to="/member/find-a-pharmacy">
                <span className="glyphicon glyphicon-pencil" aria-hidden="true">
                </span>
              </Link></span>
            </div>
          </div>
        </div>

       {
          !this.state.emailVisible
          ?     
          <div className="row">
            <div className="form-group ">
              <div className="col-xs-offset-1 col-md-4">
                  <label  for="Pharmacy" >Email Address :</label>
               </div>
                <div className="col-sm-4">
                   <span className="text-capitalize">
                      {this.props.userInfo.emailAddress}
                    </span>
                    <span  onClick={() => this._emailUpdate()} 
                    className="glyphicon glyphicon-pencil" aria-hidden="true">
                    </span>
                  </div>
              </div>
            </div>
          : null
      }
          <div className="row">
            <div className="col-xs-offset-1 col-xs-6">
          {
          this.state.emailVisible

            ? <AccountSettingsEmailForm  _emailUpdate={this._emailUpdate.bind(this)} _passwordUpdate={this._emailUpdate.bind(this)} />
            : null
          }
            </div>
         </div>

         
 {
          !this.state.passwordVisible
          ?     
          <div className="row">
            <div className="form-group ">
              <div className="col-xs-offset-1 col-md-4">
                  <label  for="Pharmacy" >Current Password :</label>
               </div>
                <div className="col-sm-4">
                   <span className="text-capitalize">
                      *********
                    </span>
                    <span  onClick={() => this._passwordUpdate()} 
                    className="glyphicon glyphicon-pencil" aria-hidden="true">
                    </span>
                  </div>
              </div>
            </div>
          : null
      }
      <div className="row">
            <div className="col-xs-offset-1 col-xs-6">
          {
          this.state.passwordVisible

            ? <AccountSettingsPasswordForm   _passwordUpdate={this._passwordUpdate.bind(this)} _emailUpdate={this._passwordUpdate.bind(this)} />
            : null
          }
            </div>
         </div>
	  

         <br/><br/>
        For Mailing Address changes, use the 
        <Link to="/member/contact">
            Contact Us Online
        </Link> 
        to inform Magellan Rx Medicare of your new mailing address.
              </div>
      
    );  
  }
}

AccountSettingsUi.propTypes = {
userInfo: PropTypes.object.isRequired,
};

export default AccountSettingsUi;
