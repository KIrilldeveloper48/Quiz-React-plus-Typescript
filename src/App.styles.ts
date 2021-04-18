import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/background.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif
  }


`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  

  > p {
    color: white
  }

    h1 {
    font-size: 70px;
    background-image: linear-gradient(180deg, #f3f3f3, #ffcc91);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px black);
    text-align: center;
    margin: 10px;
    
  }

  .score {
    background-image: linear-gradient(180deg, #f3f3f3, #ffcc91);
    background-clip: text;
    background-size: 100%;
    filter: drop-shadow(2px 2px black);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 2rem;
    margin: 0;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #f3f3f3, #ffcc91);
    border: 2px solid #704512;
    box-shadow: 0px 5px 10px rgba(0,0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }

`