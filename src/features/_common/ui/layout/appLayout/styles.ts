import styled from "styled-components";
import carImage from '@assets/images/car-green.svg';
export const Layout  = styled.main`
  @media (max-width: 900px) {
    padding: 0 ${props => props.theme.spacing[1]};
    background-image: url(${carImage}) ,linear-gradient(0deg, #FFFBEB 0%, #FFFBEB 27%, rgba(0,0,0,0) 27%);
    background-repeat: no-repeat, no-repeat;
    background-position:bottom 50px right 0 , bottom -100px right 0;
    background-size: 90% ,auto;
  }
  padding: 0 ${props => props.theme.spacing[4]};
  height: 100%;
  background-image: url(${carImage}), linear-gradient(90deg, #FFFBEB 0%, #FFFBEB 27%, rgba(0,0,0,0) 27%);
  background-repeat: no-repeat, no-repeat;
  background-position:
          bottom left,
          left;
  background-size: 50% ,auto;
  
  .layout__content {
    @media (max-width: 900px) {
        width: 100%;
      padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
    }
    width: 55%;
    padding: ${props => props.theme.spacing[4]} ${props => props.theme.spacing[6]};
  }

  @media (max-width: 900px) {
    .layout__content {
      width: 100%;
    }
  }
}
`;