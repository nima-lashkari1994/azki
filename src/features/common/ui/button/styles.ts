import styled from "styled-components";

export const Wrapper = styled.button`
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[4]};
  border: none;
  border-radius: ${props => props.theme.radius[3]};
  &.contained{
    background-color: ${props => props.theme.colors.primary};
    color:${props => props.theme.colors.text.tertiary};
  }
`;