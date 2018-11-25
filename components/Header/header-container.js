import styled from 'styled-components';
import media from '../HelperUtils/media-utils';

const HeaderContainer = styled.div`
    margin-bottom: 1rem;
    margin-top: 2rem;

     ${media.tablet`
        display:none;
     `}
`;

export default HeaderContainer;
