/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import footerLogo from '../../assets/images/logo/footer_logo.png';
import { FOOTER_COPYRIGHT_TEXT } from '../../constants';

export default function Copyright() {
  return (
    <div css={container}>
      <div css={copyrightContainer}>
        <ul css={navList}>
          <li css={navItem}>
            <div
              css={link}
              onClick={() =>
                (window.location.href = FOOTER_COPYRIGHT_TEXT.terms.link)
              }
            >
              {FOOTER_COPYRIGHT_TEXT.terms.title}
            </div>
          </li>
          <li css={navItem}>
            <div
              css={link}
              onClick={() =>
                (window.location.href = FOOTER_COPYRIGHT_TEXT.privacy.link)
              }
            >
              {FOOTER_COPYRIGHT_TEXT.privacy.title}
            </div>
          </li>
          <li css={navItem}>
            <div
              css={link}
              onClick={() =>
                (window.location.href = FOOTER_COPYRIGHT_TEXT.guide.link)
              }
            >
              {FOOTER_COPYRIGHT_TEXT.guide.title}
            </div>
          </li>
        </ul>
        <div css={address}>
          <p>
            {FOOTER_COPYRIGHT_TEXT.companyInfoFirst.map((info, index) => (
              <React.Fragment key={index}>
                <span>{info.label}</span> {info.value}
                {index < FOOTER_COPYRIGHT_TEXT.companyInfoFirst.length - 1 &&
                  ' / '}
              </React.Fragment>
            ))}
          </p>
          <p>
            {FOOTER_COPYRIGHT_TEXT.companyInfoSecond.map((info, index) => (
              <React.Fragment key={index}>
                <span>{info.label}</span> {info.value}
                {index < FOOTER_COPYRIGHT_TEXT.companyInfoSecond.length - 1 &&
                  ' / '}
              </React.Fragment>
            ))}
          </p>
          <p>
            {FOOTER_COPYRIGHT_TEXT.companyInfoThird.map((info, index) => (
              <React.Fragment key={index}>
                <span>{info.label}</span> {info.value}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div css={copyright}>{FOOTER_COPYRIGHT_TEXT.copyright}</div>
      </div>
      <div css={logo}>
        <img src={footerLogo} alt="footer logo" />
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

const copyrightContainer = css`
  flex: 1;
`;

const navList = css`
  display: flex;
  gap: 10px;
  padding: 0;
`;

const navItem = css`
  position: relative;
  color: #aaa;
  list-style: none;
  //   border-left: 1px solid #333;
  line-height: 1rem;
  font-size: 1rem;
  padding-left: 0.3rem;

  &:first-of-type {
    border-left: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    right: -7px;
    width: 1px;
    height: 10px;
    background-color: #666;
  }
`;

const link = css`
  color: #686868;
  cursor: pointer;
  font-size: 0.8rem;
`;

const address = css`
  font-size: 0.8rem;

  & p {
    color: #686868;
    font-weight: bold;
    padding: 0;
    margin: 0.3rem;
  }

  & p span {
    color: #555;
    font-weight: normal;
  }
`;

const copyright = css`
  font-size: 0.8rem;
  color: #686868;
  padding: 1rem 0;
`;

const logo = css``;
