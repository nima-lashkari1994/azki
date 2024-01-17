import styled from "styled-components";

export const Wrapper = styled.div`
  
  .signup__form{
    .row{
      display: flex;
      column-gap: ${props=> props.theme.spacing[2]};
      margin-bottom: ${props=> props.theme.spacing[1]};
    }
    
    .signup__action{
      text-align: left;
    }
  }

`;
