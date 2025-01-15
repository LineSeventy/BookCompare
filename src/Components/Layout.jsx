import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Container from './Container';

function Layout() {
  return (
    <>
    <Container>
      <NavBar />
        <Outlet /> 

        
      </Container>
    </>
  );
}

export default Layout;
