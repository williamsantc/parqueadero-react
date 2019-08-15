import React from 'react';
import AppNavbar from '../components/app-navbar';

const Layout: React.FC = ({ children }) => {

  return (
    <div>
      <AppNavbar/>
      {children}
    </div>
  );
};

export default Layout;