import React from 'react';
import { ApolloProvider } from "react-apollo-hooks"
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobayStyles";
import Theme from '../Styles/Theme';
import AppRouter from './Router';
import Client from '../Apollo/Client';


export default () => (
  <ThemeProvider theme={Theme}>
    <ApolloProvider clinet={Client}>
      <GlobalStyles />
      <AppRouter isLoggedIn={false}/>
    </ApolloProvider>
  </ThemeProvider>
)
