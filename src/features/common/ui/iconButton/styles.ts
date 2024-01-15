import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: ${props => props.theme.colors.background};
  border: solid 1px ${props => props.theme.colors.border};
  box-shadow: none;
  border-radius: ${props => props.theme.radius};
  padding: ${props => props.theme.spacing[2]};
  width: 6.5rem;
  height: 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &:hover{
    cursor: pointer;
    background-color: ${props => props.theme.colors.hover};
  }

  .icon-button__icon {
    width: 40px;
    height: 40px;
    margin-bottom: ${props => props.theme.spacing[1]};
  }
  
  &:disabled{
    cursor: unset;
    background-color: ${props => props.theme.colors.disabled};
    .icon-button__icon {
      color: ${props => props.theme.colors.text.secondary};
    }
  }
`;