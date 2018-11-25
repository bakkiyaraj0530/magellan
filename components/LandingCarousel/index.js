/**
*
* LandingCarousel
*
*/

import React from 'react';
import { Carousel } from 'react-bootstrap';
// import styled from 'styled-components';
import { getLogo } from './logos';
class LandingCarousel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Carousel id="pharmacyLogos">
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().AcmeLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().AlbertsonsLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().AmigosLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().AreteLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().BakersLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().BallsLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().BlueLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().CarrsLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().CitymarketLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().CoppsLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().CvsLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().DillonsLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().DrugmartLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().EpicLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().FredmeyerLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().FredsLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().FruthLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().FrysLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().GerbsLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().GianteagleLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().GnpLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().HaggenLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().HarristeetLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().HenhouseLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().JacycLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().JeweloscoLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().Kingsoopers} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().KmartLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().KrogerLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().KrogerspecialtyLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().MarianosLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().MarketstreetLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().MetromarketLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().MeijerLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().OwensLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().PavillionsLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().PaylessLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().PicknsaveLoo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().PpsLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().QualityfoodcenterLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().RalphsLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().RandallsLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().RxselectLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().SafewayLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().SamsclubLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().SchnucksLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().ShawsLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().SmithsLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().StarmarketLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().Tomthumb} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().UnitedLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().VonsLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().WalmartLogo} />
          </span>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().WegmansLogo} />
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="col-sm-4 text-center">
            <img alt="Pharmacy Logo" src={getLogo().WeisLogo} />
          </span>
        </Carousel.Item>
      </Carousel>
    );
  }
}

LandingCarousel.propTypes = {

};

export default LandingCarousel;
