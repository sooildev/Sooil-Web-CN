/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Header from './header/Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div css={layoutStyle}>
      <Header />
      <main css={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const layoutStyle = css`
  width: 100%;
  box-sizing: border-box;
`;
const mainStyle = css`
  margin-top: 100px;

  @media (max-width: 992px) {
    margin-top: 65px;
  }
`;
