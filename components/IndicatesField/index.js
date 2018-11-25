import styled from 'styled-components';
import { mobile } from '../HelperUtils/Media-query';

const IndicatesField = styled.div`
padding: 10px 15px;
width: 181px;
margin: 0 auto;
color: #000;
${mobile.handheld`
  width: 160px;
`}
`;

export default IndicatesField;
