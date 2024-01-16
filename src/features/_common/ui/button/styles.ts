import styled from "styled-components";
import React from "react";

type Props = React.HTMLProps<HTMLButtonElement>;
export const Wrapper = styled.button<Props>`
  position: relative;
  padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[3]};
  border: none;
  border-radius: ${props => props.theme.radius[3]};
  cursor: pointer;
  box-shadow: 0 1px 3px ${props => props.theme.colors.shadow};
  &:hover ,&:disabled{
    top:1px;
    box-shadow: none;
  }
  &.contained {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text.tertiary};
  }
  &.outlined {
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border:solid 1px ${props => props.theme.colors.primary};
  }
  &:disabled{
    cursor: unset;
    background-color: ${props => props.theme.colors.disabled};
    color: ${props => props.theme.colors.text.secondary};
  }
`;