import Styled from "styled-components";

export const Header = Styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     background-color: #222;
     color: #fff;
     padding: 0 20px;
     height: 60px;
     overflow: hidden;
     border-bottom-left-radius: 10px;
     border-bottom-right-radius: 10px;
`;

export const Logo = Styled.img`
     width: 48px;
     height: 48px;
`;

export const Navigation = Styled.nav`
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     gap: 30px;
`;

export const NavigationItem = Styled.a`
     color: #6d6d6d;
     font-weight: bold;
     transition: color ease-out .3s; 

     &:hover, &:focus {
          color: #808080;
          text-decoration: underline;
     }

     &.active-route {
          font-weight: bolder;
          color: #969696;
     }
`;