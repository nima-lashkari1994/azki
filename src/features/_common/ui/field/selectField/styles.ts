import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  & option {
    color: ${props => props.theme.colors.text.primary};
  }

  &.empty {
    .field__input {
      color: ${props => props.theme.colors.text.secondary};
    }
  }

  .field__input {
    cursor: pointer;
    appearance: none;
    color: ${props => props.theme.colors.text.primary};
  }

  .select-field__arrow {
    position: absolute;
    left: ${props => props.theme.spacing[1]};
    top: 25%;
    width: 8px;
    height: 8px;
    color: inherit;
    transform: rotate(270deg);
  }
`;