import styled from "styled-components";

export const Wrapper = styled.div`

  .description {
    color: ${props => props.theme.colors.text.secondary};
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }
`;