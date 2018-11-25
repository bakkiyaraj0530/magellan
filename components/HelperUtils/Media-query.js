/* eslint linebreak-style: ["error", "windows"] */
import { css } from 'styled-components';
export const mobile = {
  handheld: (...args) => css`
    @media (max-width: 767px) {
     ${css(...args)}
    }
  ` };

export const tablet = {
  handheld: (...args) => css`
    @media (max-width: 991px){
      ${css(...args)}
    }
  ` };

export const tabletlandscape = {
  handheld: (...args) => css`
    @media (max-width: 1199px) {
      ${css(...args)}
    }
  ` };
