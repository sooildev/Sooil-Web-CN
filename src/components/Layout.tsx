/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import Header from './header/Header';
import Footer from './Footer';

type LayoutProps = {
  children?: ReactElement;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div css={layoutStyle}>
      <Header />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
}

const layoutStyle = css``;
const mainStyle = css`
  margin-top: 100px;

  @media (max-width: 992px) {
    margin-top: 65px;
  }
`;
