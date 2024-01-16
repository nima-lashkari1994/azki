import styled from "styled-components";

export const Wrapper = styled.div`
  
  .signup-page__form{
    
    .signup-page__form__row{
      display: flex;
      column-gap: ${props=> props.theme.spacing[2]};
      margin-bottom: ${props=> props.theme.spacing[1]};
    }
    
    .signup-page__form__action{
      text-align: left;
    }
  }

`;