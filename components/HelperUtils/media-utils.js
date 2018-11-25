import { css } from 'styled-components';

const sizes = {
  desktop: 1300,
  tablet: 768,
  phone: 320,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 12}em) {
        ${css(...args)}
    }
    `;
  return acc;
}, {});

export default media;

