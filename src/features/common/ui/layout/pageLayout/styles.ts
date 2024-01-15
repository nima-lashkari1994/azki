import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing[4]} ${props => props.theme.spacing[6]};
  
  .page-layout__title{
    margin-bottom: ${props => props.theme.spacing[4]};
  }
`;