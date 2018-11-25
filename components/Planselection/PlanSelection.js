import styled from 'styled-components';
// import { tablet, mobile } from '../HelperUtils/Media-query';

const PlanselectionStyles = styled.div`
     .btn-primary {
        background-color: #73AFB6;
        border-color: #73AFB6;
    }
    .fade {
      opacity: 1;
    }
    .mb-3 {
        margin-bottom: 2rem!important;
        margin-top: 2rem;
    }
    .plan-bottom-line{
      border-bottom: 1px solid #E1E5E8;
    }
    .plan-content-area{
        padding-top: 50px;
        margin: 0 auto;
    }

    .well {
        background-color: #fff;
        width: 300px;
    }
    .well-center{
        margin: 0 auto;
        margin-bottom: 50px;
    }
    .well-title {
        color: #5C6F7C;
        font-size: 1.25rem;
        margin-bottom: .75rem;
    }
    .well-body {
        flex: 1 1 auto;
        padding: 1.25rem;
    }

    .btn-primary.active,
    .btn-primary:active,
    .btn-primary:hover {
        background-color: #5C6F7C;
        border-color: #5C6F7C;
    }

    .card-body.back {
        display: none;
        transform: rotateY(180deg);
    }

    .header-logo {
        height: 80px;
        margin-bottom: 15px;
    }
    @media(max-width:991px){
      .header-logo{
      }
    }
    @media (max-width: 767px) {
      .well-center{
          margin-bottom: 25px;
      }
      .header-logo{
        height: 50px;
      }
      .plan-content-area{
        padding-top: 30px;
      }
      .well{
        width: 100%;
      }
    }
`;
export default PlanselectionStyles;
