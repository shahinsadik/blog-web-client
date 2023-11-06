import React from 'react';
import { Outlet } from "react-router-dom"
import MainLayout from './Components/Layout/MainLayout';
import FooterSection from './Components/Layout/FooterSection';
const App = () => {
  return (
    <div>
      <MainLayout>
      </MainLayout>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </div>
  );
};

export default App;