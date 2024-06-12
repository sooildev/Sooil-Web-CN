/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Menu from './Menu';
import MenuIcon from '@mui/icons-material/Menu';

const aboutSubMenu = [
  { subMenuName: '개요', link: '/about' },
  { subMenuName: '역사', link: '/about/history' },
  { subMenuName: '조직도', link: '/about/organization' },
];

const productSubMenu = [
  { subMenuName: '인슐린펌프', link: '/product' },
  { subMenuName: '주입세트', link: '/product/infusion-sets' },
];

export default function MenuList() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div css={menuList}>
        <Menu name="회사소개" subMenu={aboutSubMenu} />
        <Menu name="제품소개" subMenu={productSubMenu} />
      </div>
      <div css={mobileMenuStyle} onClick={handleOpenMenu}>
        <MenuIcon css={menuIcon} fontSize="large" />
      </div>
      {isMobileMenuOpen && (
        <div css={mobileMenuContainer(isMobileMenuOpen)}>test</div>
      )}
    </>
  );
}

const menuList = css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

const mobileMenuStyle = css`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
  }
`;

const menuIcon = css`
  cursor: pointer;
`;

const mobileMenuContainer = (isMobileMenuOpen: boolean) => css`
  position: fixed;
  background-color: red;
  overflow: hidden;
  height: ${isMobileMenuOpen ? '100vh' : '0'};
  width: 100%;
  top: 65px;
  left: 0;
  transition: all 0.5s ease;
`;
