import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Container from './Container';
import Footer from './Footer';

function Layout() {
  return (
    <>
    <Container>
      <NavBar />
      <div className='content'>
        <Outlet /> 
        </div>
        <Footer/>
      </Container>
    </>
  );
}

export default Layout;
