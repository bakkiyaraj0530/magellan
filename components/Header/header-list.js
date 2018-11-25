import styled from 'styled-components';
import colors from '../HelperUtils/branding-colors';
const HeaderList = styled.ul`
    margin-top:1rem;
    >.font-size-changer-buttons {
        >button {
            padding: 2px;
            border: none;
            color:${colors.magellanblue};
        }

        .base-font-size{
            font-size:1.3rem;
        }
        .large-font-size{
            font-size:1.5rem;
        }
        .largest-font-size{
            font-size:1.8rem;
        }
    }

    >li{
        margin-right:1rem;
        a:hover{
            text-decoration:none;
            color:${colors.magellanblue};
        }
    }

`;

export default HeaderList;
