import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = ({userData})=> {
  return (
    <>
      <Header userData = {userData}/>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
export default Layout