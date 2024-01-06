import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
  html, body, #__next  {
    height: 100%;
  }

  textarea {
    resize: none;
  }

  #__next {
    font-family: "Rubik", sans-serif;
    color: #2D2D2D;
    display: flex;
    flex-direction: column;
  }

  button, input, optgroup, select, textarea {
    font-family: "Rubik", sans-serif;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: 0.25s;
  }


  h1, h2, h3, h4, h5, h6, p, ul, ol, li {
    margin: 0;
    padding: 0;
    font-weight: 500;
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    position: fixed;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: #888;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .MuiModal-root {
    overflow: auto;
  }

 
`;

export default GlobalStyle;
