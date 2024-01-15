import styled from "styled-components";
import carImage from '@assets/images/car-green.svg';
export const Layout  = styled.main`
  padding: 0 ${props => props.theme.spacing[4]};
  height: 100%;
  background-image: url(${carImage}), linear-gradient(90deg, #FFFBEB 0%, #FFFBEB 27%, rgba(0,0,0,0) 27%);
  background-repeat: no-repeat, no-repeat;
  background-position:
          bottom left,
          left;
  background-size: 50% ,auto;
  
  .layout__content {
    max-width: 50%;
  }
}
`;