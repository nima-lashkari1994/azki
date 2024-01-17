import styled from "styled-components";

export const Wrapper = styled.header`

  @media (max-width: 900px) {
    .header{
      display: none;
    }
  }
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[2]};
  
  .navbar__user-info{
    display: flex;
    align-items: center;
    .navbar__user-icon{
      width: 15px;
      height: 15px;
      margin-left: ${props => props.theme.spacing[1]};
    }
  }
  
  .navbar__logo{
    width:1.5rem;
    height:1.5rem;
  }
`;