import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .field__input {
    cursor: pointer;
    appearance: none;
  }
  
  .select-field__default-option{
    color:${props => props.theme.colors.text.secondary}
  }

  .select-field__arrow {
    position: absolute;
    left: ${props => props.theme.spacing[1]};
    top: 20%;
    width: 8px;
    height: 8px;
    color: inherit;
    transform: rotate(270deg);
  }
`;