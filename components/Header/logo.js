import styled from 'styled-components';

import NormalImg from 'components/Img';

const Logo = styled(NormalImg)`
    width: ${(props) => props.width ? props.width : 'auto'};
    height:  ${(props) => props.height ? props.height : '50px'};
    background-repeat: no-repeat;
    background-position: left center;
    margin-left:20px;
    margin-top: ${(props) => props.mtop ? props.mtop : '0px'};
`;

export default Logo;
