
import {css } from 'styled-components';
export const mobile =(props)=>{
  return css `
  @media only screen and (max-width:380px ,max-height:667px){  /* this is end point of mobile */
  ${props}
}

  `;
};

// export const tablet =(props)=>{
//     return css `
//     @media only screen and (max-width:380px ){  /* this is end point of mobile */
//     ${props}
//   }
//     `;
//   };
