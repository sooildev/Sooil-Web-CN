import { yearsSince } from '../utils';

const CAROUSEL_TEXT = {
  first: {
    title: ['한걸음 먼저,', '새로운 기술로 당뇨병 치료를', '이끌어 갑니다.'],
    description: `SETTING THE PACE FOR INNOVATION INDIABETES CARE ${yearsSince()} YEARS OF INSULIN PUMP THERAPY.`,
  },
  second: {
    title: [
      '안드로이드 스마트폰을 위한',
      '모바일 관리자가 새로',
      '출시되었습니다.',
    ],
    description:
      'THE MOBILE MANAGER FOR ANDROID SMARTPHONES HAVE BEEN NEWLY RELEASED.',
  },
};

const MAIN_BANNER_TEXT = {
  about: {
    title: '인슐린펌프의 선도기업',
    description:
      '치료의 길을 제시하기 위한 끊임없는 노력으로 인슐린 펌프의 새로운 길을 개척해 나갑니다.',
  },
  product: {
    title: '인슐린펌프 제품소개',
    description: '최첨단 의학과 초정밀 공학의 결합으로 수일개발이 함께합니다.',
  },
  mall: {
    title: 'SOOIL MALL',
    description:
      '수일은 당뇨병으로 고통받는 모든 사람을 위해 무한한 지원을 약속드립니다.',
  },
  detail: '자세히보기',
};

const MAIN_APP_BANNER_TEXT = {
  title: ['이제 혈당관리는', '다나 모바일 앱으로 편리하게 체크하세요!'],
  description: '매일매일 쉽고 간편하게 관리할 수 있습니다.',
};

const FOOTER_NAV_TEXT = {
  about: {
    title: '회사소개',
    link: '/about',
  },
  product: {
    title: '제품소개',
    link: '/product',
  },
  eng: {
    title: 'ENG',
    link: 'https://www.sooil.com/eng',
  },
  mall: {
    title: 'SOOIL Mall',
    link: 'https://sooilmall.com/shop',
  },
};

const FOOTER_COPYRIGHT_TEXT = {
  terms: {
    title: '이용약관',
    link: 'https://www.sooil.com/bbs/content.php?co_id=provision',
  },
  privacy: {
    title: '개인정보취급방침',
    link: 'https://www.sooil.com/bbs/content.php?co_id=privacy',
  },
  guide: {
    title: '이용안내',
    link: 'https://www.sooil.com/bbs/content.php?co_id=information',
  },
  companyInfo: [
    {
      label: 'E-mail',
      value: 'dana@golddana.com',
    },
    {
      label: '电话',
      value: '0755-83479626',
    },
    {
      label: '传真',
      value: '0755-83458827',
    },
    {
      label: '地址',
      value: '深圳市福田区福田街道福华一路98号卓越大厦1703-1704',
    },
    {
      label: '邮编',
      value: '518040',
    },
    {
      label: '',
      value: '粤ICP备16068842号-4',
    },
  ],
  companyInfoFirst: [
    {
      label: '회사명',
      value: 'SOOIL Development',
    },
    {
      label: '대표',
      value: '염윤희',
    },
    {
      label: '주소',
      value: '경기도 용인시 기흥구 용구대로2325번길 62(마북동)',
    },
  ],
  companyInfoSecond: [
    {
      label: '사업자 등록번호',
      value: '108-81-30224',
    },
    {
      label: '전화',
      value: '02-3463-0041',
    },
    {
      label: '팩스',
      value: '02-3463-7707',
    },
  ],
  companyInfoThird: [
    {
      label: '의료기기 광고 사전심의번호',
      value: '2007-110-10-0232, 2007-110-10-0231, 2007-110-10-0276',
    },
  ],
  copyright: '© All rights reserved by SOOIL Developments Co., Ltd',
};

export {
  CAROUSEL_TEXT,
  MAIN_BANNER_TEXT,
  MAIN_APP_BANNER_TEXT,
  FOOTER_NAV_TEXT,
  FOOTER_COPYRIGHT_TEXT,
};
