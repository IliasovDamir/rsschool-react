import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { FC } from 'react';
import './Navigation.css';

type Props = {
  children: React.ReactNode;
};

const Navigation: FC<Props> = ({ children }) => {
  return (
    <div className="nav">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Navigation;
