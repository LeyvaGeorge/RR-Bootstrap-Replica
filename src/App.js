import './App.css';

import TopBar from './components/TopBar';
import styled from 'styled-components';
// import { Row, Col, Container } from 'react-bootstrap';
import splashImage from './splash.webp'
import StoreListing from './components/StoreListing';

const Splash = styled.div`
  width: 100vw;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:url(${ splashImage });
  background-color: #dfeed6;
  position: absolute;
  left:0;
  top:40px
  righ 0;
  z-index: -1;
`
const StyledStoreListing = styled(StoreListing)`
  position: relative;
  top:600px;
  `

function App() {
  return (
    <>
      <TopBar/>
      
      <Splash/>
      <StyledStoreListing/>
    </>
  );
}

export default App;
