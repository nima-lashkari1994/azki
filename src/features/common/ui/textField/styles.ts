import styled from "styled-components";

type Props = {
    $isError: boolean,
}
export const Wrapper = styled.div<Props>`
  height: 4rem;
  width: 100%;
  .text-field__input {
    direction: rtl;
    width: 100%;
    padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
    border: solid 1px ${props => props.$isError ? props.theme.colors.error : props.theme.colors.border};
    border-radius: ${props => props.theme.radius[0]};

    &::placeholder {
      color: ${props => props.theme.colors.text.secondary};
    }

    &:focus {
      outline: none;
    }
  }

  .text-field__error {
    color: ${props => props.theme.colors.error};
  }
`;