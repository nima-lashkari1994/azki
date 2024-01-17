import styled from "styled-components";

export const Wrapper = styled.div`

  .modal__backdrop {
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .modal__content {
    z-index: 1000;
    position: fixed;
    min-width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${props => props.theme.spacing[2]};
    background-color: ${props => props.theme.colors.background};
    border-radius: ${props => props.theme.radius[1]};
  }

  .modal__close-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

`;