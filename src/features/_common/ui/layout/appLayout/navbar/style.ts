import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[2]};
  
  .navbar__logo{
    width:1.5rem;
    height:1.5rem;
  }
`;