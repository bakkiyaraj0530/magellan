/**
*
* ClaimsHistory
*
*/

import React from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function ClaimsHistory() {
  return (
    <div className="claim-tablepanel clearfix">
      <div className="claim-daterange">
        <span className="claim-range">Date Range: <a href="">Last 30 days <img src="svg/arrow.svg" alt="Arrow" /></a></span>
        <span className="hidden-xs claim-download"><a href="" title="Download Claims">Download Claims</a></span>
      </div>
      <ul className="claimhistory-list panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <li className="hidden-xs claimlist-head clearfix">
          <div className="col-sm-7 col-md-7 col-lg-8 cm-left">
            <div className="col-sm-3 col-md-3 col-lg-3"><span className="mag-claim-sortTxt">SERVICE <br /> DATE</span>
              <span className="mag-claim-sortImg"></span>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5"><span className="mag-claim-sortTxt">DRUG NAME</span>
              <span className="mag-claim-sortImg"></span>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4"><span className="mag-claim-sortTxt">PHARMACY</span>
              <span className="mag-claim-sortImg"></span>
            </div>
          </div>
          <div className="col-sm-5 col-md-5 col-lg-4 cm-right">
            <div className="col-sm-5 col-md-4 col-lg-4"><span className="mag-claim-sortTxt">YOU PAID</span>
              <span className="mag-claim-sortImg"></span>
            </div>
            <div className="col-sm-3 col-md-5 col-lg-5"><span className="mag-claim-sortTxt">CLAIM <br />STATUS</span>
              <span className="mag-claim-sortImg"></span>
            </div>
            <div className="col-sm-4 col-md-3 col-lg-3"></div>
          </div>
        </li>
        <li className="panel panel-default clearfix">
          <div className="col-xs-8 col-sm-7 col-md-7 col-lg-8 cm-left">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 mnth-lbal">Apr 01, 2017</div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 video-lbl">
              <div className="video-panel"><a href="" title="Video"><img src="svg/video.svg" alt="video" /></a></div>
              Lipitor 25 MG TAB
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 pharm-lbl">CVS</div>
          </div>
          <div className="col-xs-4 col-sm-5 col-md-5 col-lg-4 cm-right">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 title-attr pay-lbl" data-title="YOU PAID">$14.00</div>
            <div className="col-xs-12 col-sm-3 col-md-5 col-lg-5 status paid" data-title="CLAIM STATUS">Paid</div>
            <div className="hidden-xs col-sm-4 col-md-3 col-lg-3 moreinfo"><a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse1" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a></div>
          </div>
          <div className="col-xs-12 hidden-sm hidden-md hidden-lg moreinfo">
            <a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse1" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a>
          </div>
          <div id="collapse1" className="panel-collapse collapse claimexpanded-content" role="tabpanel">
            <div className="panel-body">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-left">
                <p>Westwood Pharmacy</p>
                <p>5823 Patterson Ave. Richmond, VA 23226</p>
                <p>555-555-5555</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-right">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pharmacy-id">
                  <p><span>PHARMACY ID</span>123456789</p>
                  <p><span>RX NUMBER</span>123456789</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 quantity-count">
                  <p><span>DOSAGE</span>10mg</p>
                  <p><span>QUANTITY</span>270</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 planing-list">
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost you-paid">
                  <p>You Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost plan-paid">
                  <p>Plan Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost extra-help">
                  <p>Extra Help</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost other-payer">
                  <p>Other Payer</p>
                  <span>$0,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="panel panel-default clearfix">
          <div className="col-xs-8 col-sm-7 col-md-7 col-lg-8 cm-left">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 mnth-lbal">Apr 01, 2017</div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 video-lbl">
              <div className="video-panel"><a href="" title="Video"><img src="svg/video.svg" alt="video" /></a></div>
              Crestor 300 MG CAPSULE
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 pharm-lbl">CVS</div>
          </div>
          <div className="col-xs-4 col-sm-5 col-md-5 col-lg-4 cm-right">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 title-attr pay-lbl" data-title="YOU PAID">$0.00</div>
            <div className="col-xs-12 col-sm-3 col-md-5 col-lg-5 status rejected" data-title="CLAIM STATUS">Rejected</div>
            <div className="hidden-xs col-sm-4 col-md-3 col-lg-3 moreinfo"><a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse2" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a></div>
          </div>
          <div className="col-xs-12 hidden-sm hidden-md hidden-lg moreinfo"><a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse2" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a></div>
          <div id="collapse2" className="panel-collapse collapse claimexpanded-content" >
            <div className="panel-body">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-left">
                <p>Westwood Pharmacy</p>
                <p>5823 Patterson Ave. Richmond, VA 23226</p>
                <p>555-555-5555</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-right">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pharmacy-id">
                  <p><span>PHARMACY ID</span>123456789</p>
                  <p><span>RX NUMBER</span>123456789</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 quantity-count">
                  <p><span>DOSAGE</span>10mg</p>
                  <p><span>QUANTITY</span>270</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 planing-list">
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost you-paid">
                  <p>You Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost plan-paid">
                  <p>Plan Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost extra-help">
                  <p>Extra Help</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost other-payer">
                  <p>Other Payer</p>
                  <span>$0,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="panel panel-default clearfix">
          <div className="col-xs-8 col-sm-7 col-md-7 col-lg-8 cm-left">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 mnth-lbal">Apr 01, 2017</div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 video-lbl">
              <div className="video-panel"></div>
              Lipitor 300 MG CAPSULE
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 pharm-lbl">Westwood Pharmacy</div>
          </div>
          <div className="col-xs-4 col-sm-5 col-md-5 col-lg-4 cm-right">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 title-attr pay-lbl" data-title="YOU PAID">$0.00</div>
            <div className="col-xs-12 col-sm-3 col-md-5 col-lg-5 status denied" data-title="CLAIM STATUS">Denied</div>
            <div className="hidden-xs col-sm-4 col-md-3 col-lg-3 moreinfo"><a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse3" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a></div>
          </div>
          <div className="col-xs-12 hidden-sm hidden-md hidden-lg moreinfo"><a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse3" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a></div>
          <div id="collapse3" className="panel-collapse collapse claimexpanded-content" >
            <div className="panel-body">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-left">
                <p>Westwood Pharmacy</p>
                <p>5823 Patterson Ave. Richmond, VA 23226</p>
                <p>555-555-5555</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-right">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pharmacy-id">
                  <p><span>PHARMACY ID</span>123456789</p>
                  <p><span>RX NUMBER</span>123456789</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 quantity-count">
                  <p><span>DOSAGE</span>10mg</p>
                  <p><span>QUANTITY</span>270</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 planing-list">
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost you-paid">
                  <p>You Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost plan-paid">
                  <p>Plan Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost extra-help">
                  <p>Extra Help</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost other-payer">
                  <p>Other Payer</p>
                  <span>$0,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="panel panel-default clearfix">
          <div className="col-xs-8 col-sm-7 col-md-7 col-lg-8 cm-left">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 mnth-lbal">Apr 01, 2017</div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 video-lbl">
              <div className="video-panel"><a href="" title="Video"><img src="svg/video.svg" alt="video" /></a></div>
              Lipitor 25 MG TAB
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 pharm-lbl">CVS</div>
          </div>
          <div className="col-xs-4 col-sm-5 col-md-5 col-lg-4 cm-right">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 title-attr pay-lbl" data-title="YOU PAID">$14.00</div>
            <div className="col-xs-12 col-sm-3 col-md-5 col-lg-5 status paid" data-title="CLAIM STATUS">Paid</div>
            <div className="hidden-xs col-sm-4 col-md-3 col-lg-3 moreinfo"><a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse4" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a></div>
          </div>
          <div className="col-xs-12 hidden-sm hidden-md hidden-lg moreinfo"><a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse4" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a></div>
          <div id="collapse4" className="panel-collapse collapse claimexpanded-content" role="tabpanel">
            <div className="panel-body">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-left">
                <p>Westwood Pharmacy</p>
                <p>5823 Patterson Ave. Richmond, VA 23226</p>
                <p>555-555-5555</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-right">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pharmacy-id">
                  <p><span>PHARMACY ID</span>123456789</p>
                  <p><span>RX NUMBER</span>123456789</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 quantity-count">
                  <p><span>DOSAGE</span>10mg</p>
                  <p><span>QUANTITY</span>270</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 planing-list">
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost you-paid">
                  <p>You Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost plan-paid">
                  <p>Plan Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost extra-help">
                  <p>Extra Help</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost other-payer">
                  <p>Other Payer</p>
                  <span>$0,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="panel panel-default clearfix">
          <div className="col-xs-8 col-sm-7 col-md-7 col-lg-8 cm-left">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 mnth-lbal">Apr 01, 2017</div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 video-lbl">
              <div className="video-panel"><a href="" title="Video"><img src="svg/video.svg" alt="video" /></a></div>
              Crestor 300 MG CAPSULE
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 pharm-lbl">CVS</div>
          </div>
          <div className="col-xs-4 col-sm-5 col-md-5 col-lg-4 cm-right">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 title-attr pay-lbl" data-title="YOU PAID">$14.00</div>
            <div className="col-xs-12 col-sm-3 col-md-5 col-lg-5 status paid" data-title="CLAIM STATUS">Paid</div>
            <div className="hidden-xs col-sm-4 col-md-3 col-lg-3 moreinfo"><a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse5" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a></div>
          </div>
          <div className="col-xs-12 hidden-sm hidden-md hidden-lg moreinfo">
            <a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse5" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a>
          </div>
          <div id="collapse5" className="panel-collapse collapse claimexpanded-content" role="tabpanel">
            <div className="panel-body">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-left">
                <p>Westwood Pharmacy</p>
                <p>5823 Patterson Ave. Richmond, VA 23226</p>
                <p>555-555-5555</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-right">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pharmacy-id">
                  <p><span>PHARMACY ID</span>123456789</p>
                  <p><span>RX NUMBER</span>123456789</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 quantity-count">
                  <p><span>DOSAGE</span>10mg</p>
                  <p><span>QUANTITY</span>270</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 planing-list">
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost you-paid">
                  <p>You Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost plan-paid">
                  <p>Plan Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost extra-help">
                  <p>Extra Help</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost other-payer">
                  <p>Other Payer</p>
                  <span>$0,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="panel panel-default clearfix">
          <div className="col-xs-8 col-sm-7 col-md-7 col-lg-8 cm-left">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 mnth-lbal">Apr 01, 2017</div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 video-lbl">
              <div className="video-panel"></div>
              Lipitor 300 MG CAPSULE
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 pharm-lbl">Westwood Pharmacy</div>
          </div>
          <div className="col-xs-4 col-sm-5 col-md-5 col-lg-4 cm-right">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 title-attr pay-lbl" data-title="YOU PAID">$0.00</div>
            <div className="col-xs-12 col-sm-3 col-md-5 col-lg-5 status paid" data-title="CLAIM STATUS">Paid</div>
            <div className="hidden-xs col-sm-4 col-md-3 col-lg-3 moreinfo"><a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse6" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a></div>
          </div>
          <div className="col-xs-12 hidden-sm hidden-md hidden-lg moreinfo">
            <a data-toggle="collapse" className="more-info" data-parent="#accordion" href="#collapse6" aria-expanded="true">More Info <span className="accarrow down-arrow" aria-hidden="false"></span></a>
          </div>
          <div id="collapse6" className="panel-collapse collapse claimexpanded-content" role="tabpanel">
            <div className="panel-body">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-left">
                <p>Westwood Pharmacy</p>
                <p>5823 Patterson Ave. Richmond, VA 23226</p>
                <p>555-555-5555</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 expand-right">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pharmacy-id">
                  <p><span>PHARMACY ID</span>123456789</p>
                  <p><span>RX NUMBER</span>123456789</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 quantity-count">
                  <p><span>DOSAGE</span>10mg</p>
                  <p><span>QUANTITY</span>270</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 planing-list">
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost you-paid">
                  <p>You Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost plan-paid">
                  <p>Plan Paid</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost extra-help">
                  <p>Extra Help</p>
                  <span>$0,000.00</span>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 plancost other-payer">
                  <p>Other Payer</p>
                  <span>$0,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

ClaimsHistory.propTypes = {

};

export default ClaimsHistory;
