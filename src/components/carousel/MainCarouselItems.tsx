/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface CarouselItemContentProps {
  slideIndex: number;
  currentSlide: number | null;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const CarouselItem = ({
  slideIndex,
  currentSlide,
  leftContent,
  rightContent,
}: CarouselItemContentProps) => {
  return (
    <>
      <div
        css={[
          leftCarouselItemContent,
          currentSlide !== slideIndex ? slideEnter('-120vw') : slideEnterActive,
        ]}
      >
        {leftContent}
      </div>
      <div
        css={[
          rightCarouselItemContent,
          currentSlide !== slideIndex ? slideEnter('120vw') : slideEnterActive,
        ]}
      >
        {rightContent}
      </div>
    </>
  );
};

export { CarouselItem };

const CarouselItemContent = css`
  position: absolute;
  width: 50%;
  height: 320px;
  top: 0;
  box-sizing: border-box;
`;

const leftCarouselItemContent = css`
  ${CarouselItemContent};
  color: #fff;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-left: 15px;
  padding-bottom: 10px;

  & h2 {
    line-height: 1.1;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  & p {
    margin-top: 0;
  }
`;

const rightCarouselItemContent = css`
  ${CarouselItemContent};
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselItemImgStyle = css`
  height: 320px;
  object-fit: cover;
`;

const slideEnter = (x: string) => css`
  opacity: 0;
  transform: translateX(${x});
`;

const slideEnterActive = css`
  opacity: 1;
  transform: translateX(0);
  transition: all 1.5s ease;
`;
