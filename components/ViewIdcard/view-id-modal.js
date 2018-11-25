import styled from 'styled-components';
// import media from '../HelperUtils/media-utils';
import colors from '../HelperUtils/branding-colors';

const IdModal = styled.div`


.modal-dialog {
    max-width: 480px;
}

.modal-dialog .usericon {
    padding-left: 15px;
    padding-right: 15px;
}

.modal-dialog div[class^="col-"] {
    padding-left: 15px;
    padding-right: 15px;
}

.modal-content{
    border-radius:10px;
}

.btnclose {
    position: absolute;
    height: 30px;
    width: 30px;
    top: -10px;
    right: -10px;
    padding: 5px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    background-color:${colors.magellanwhite};
    border:2px solid ${colors.magellan20black};
    &:hover{
        background-color:${colors.magellanwhite};
    }
    svg{
      width: 11px;
    }
}

button{
    margin-left:1rem;
}

`;

export default IdModal;
