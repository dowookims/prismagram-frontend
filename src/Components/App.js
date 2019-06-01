import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks"
import { HashRouter as Router } from "react-router-dom";
import styled, { ThemeProvider,  } from "styled-components";
import { ToastContainer, toast} from "react-toastify";
import GlobalStyles from "../Styles/GlobayStyles";
import Theme from '../Styles/Theme';
import Routes from './Router';
import Header from './Header';
import Footer from './Footer';


const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth}
  width: 100%;
`

export default () => {
  const { data: {isLoggedIn} } = useQuery(QUERY);
  return (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Router>
        <>
        <Header />
        <Wrapper>
          <Routes isLoggedIn={isLoggedIn}/>
          <Footer/>
        </Wrapper>
        </>
      </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
    </>
  </ThemeProvider>
  )
}