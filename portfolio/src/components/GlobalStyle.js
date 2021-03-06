import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}

button {
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    border-radius: 0.3rem;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;

    &:hover{
        background-image: linear-gradient(120deg, #23d997 0%, #23d9c1 100%);
    }
}

h1 {
    font-weight: bold;
    color: #23d997;
    
}
h2 {
    font-weight: lighter;
    font-size: 4rem;
}
h3 {
    color: white;
}
h4 {
    font-weight: bold;
    font-size: 2rem;

}

a {
    font-size: 1.1.rem;
    color: #23d9c1;
}

span {
    font-weight: bold;
    color: #23d997;
}

p {
    padding: 3rem 0;
    font-size: 1.4rem;
    color: #cccccc;
    line-height: 150%;
}

`;
