import {createGlobalStyle} from 'styled-components'; 
import {themes} from './ColorStyles'; 

// media (prefers-color-scheme: dark) si el navegador lo dectecta, en automático cambia de tema según la hora del sistema

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.light.backgroundColor};


    @media (prefers-color-scheme: dark) {
        background: ${themes.dark.backgroundColor};
    }
  }
`; 