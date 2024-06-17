import React, { ReactNode } from 'react';
import SubLayout from '../../components/SubLayout';
import SubVisual from '../../components/common/SubVisual';
import subVisualBg from '../../assets/images/sub/product/sub_vs02.jpg';
import { PRODUCT_SUB_VISUAL_TEXT, productSubMenu } from '../../constants';
import SubMenuList from '../../components/common/SubMenuList';

type ProductLayoutProps = {
  children: ReactNode;
};

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <SubLayout>
      <SubVisual
        subBg={subVisualBg}
        subTitleString={PRODUCT_SUB_VISUAL_TEXT.subTitle}
        subDescriptionString={PRODUCT_SUB_VISUAL_TEXT.subDescription}
      />
      <SubMenuList subMenu={productSubMenu} />
      {children}
    </SubLayout>
  );
}
