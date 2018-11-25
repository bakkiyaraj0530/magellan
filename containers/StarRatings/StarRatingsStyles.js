import styled from 'styled-components';
import { mobile, tablet } from '../../components/HelperUtils/Media-query';

const StarRatingsStyles = styled.div`
h1 {
    font-weight: 300;
    font-size: 3rem;
    color: #000;
    text-align: center;
    line-height: 2.5rem;
    margin: 0;
    padding: 0 0 4rem;
    ${mobile.handheld`
        padding: 0 0 3rem;
    `}
}
.state-expanded-content {
    padding: 0 15.3rem 5rem 15.3rem;
    ${tablet.handheld`
        padding: 0 3rem;
    `}
    ${mobile.handheld`
        padding: 0 0 3rem 0;
    `}
    p {
        color: #000;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.9rem;
        .doc-bold {
            font-weight: 700;
        }
        a {
            font-weight: 500;
            font-size: 1.4rem;
            color: #0077c8;
        }
    }
    li {
        color: #000;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.9rem;
    }
}
.L-space {
    padding-left: 3.9rem;
}
ul,
ol {
    padding: 0 0 0 5rem;
}
.rading-list {
    padding: 0 0 1.8rem;
    margin: 0;
    li {
        list-style: none;
        img {
            vertical-align: text-top;
            margin-right: 0.2rem;
        }
        span {
            padding-left: 0.5rem;
        }
    }
}
}

@media (max-width: 767px) {
ul,
ol {
    padding-left: 2rem;
}
.L-space {
    padding-left: 0;
}
}
.clearfix:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; }
.clearfix { height: 1%; }
.clearfix { display: block; }
`;
export default StarRatingsStyles;
