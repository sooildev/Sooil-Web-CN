/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface CarouselContainerProps {
  bg: string;
  children: React.ReactNode;
}

export default function CarouselContainer({
  bg,
  children,
}: CarouselContainerProps) {
  return (
    <div css={CarouseContainer(bg)}>
      <div css={innerCarouseContainer}>{children}</div>
    </div>
  );
}

const CarouseContainer = (bg: string) => css`
  width: 100%;
  height: 320px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    height: 300px;
  }

  @media (max-width: 414px) {
    height: 200px;
  }
`;

const innerCarouseContainer = css`
  position: relative;
  width: 1170px;
  height: 100%;
  margin: 0 auto;
`;