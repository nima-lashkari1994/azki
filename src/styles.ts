import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
  }
  html{
    height: 100%;
  }
  #root{
    height: 100%;
  }
  body {
    direction: rtl;
    margin: 0;
    padding: 0;
    font-family: 'Vazir', serif;
    height:100%;
  }
  button,input,select{
    font-family: inherit;
  }
`;

export default GlobalStyle;