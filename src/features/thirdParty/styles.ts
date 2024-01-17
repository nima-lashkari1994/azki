import styled from "styled-components";

export const Wrapper = styled.div`

  .third-party__form-description {
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: ${props => props.theme.spacing[3]};
  }

  .third-party__actions {
    display: flex;
    justify-content: space-between;
  }
`;