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

export { CAROUSEL_TEXT, MAIN_BANNER_TEXT, MAIN_APP_BANNER_TEXT };
