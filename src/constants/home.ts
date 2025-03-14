import kakaoIcon from '@/assets/images/main/button/kakaoIcon.png';
import instagramIcon from '@/assets/images/main/button/instagramIcon.png';
import slide1 from '@/assets/images/main/slide/slide1.png';
import slide2 from '@/assets/images/main/slide/slide2.png';
import slide3 from '@/assets/images/main/slide/slide3.png';
import slide4 from '@/assets/images/main/slide/slide4.png';

import mainCharacter from '@/assets/images/main/description/mainCharacter.png';
import sub from '@/assets/images/main/description/sub.png';
import title from '@/assets/images/main/description/title.png';
import what from '@/assets/images/main/description/what.png';

/** 메인 버튼단(카톡 프로필 만들러 가기, 인스타 썸네일 만들러 가기) */
export const mainLinkButtons = [
  {
    title: '카톡 프로필 만들러 가기',
    image: kakaoIcon,
    color: '#391B1B',
    url: '/createKakao',
  },
  {
    title: '인스타 썸네일 만들러 가기',
    image: instagramIcon,
    color: 'linear-gradient(90deg, #8a2be2, #ff0066);',
    url: '/createInstagram',
  },
];

/** 메인 슬라이드 이미지셋 */
export const mainSlideImages = [slide1, slide2, slide3, slide4];

/** */
export const descriptionImageObject = [
  {
    width: 47,
    bottom: 10,
    image: what,
  },
  {
    width: 250,
    bottom: 3,
    image: title,
  },
  {
    width: 218,
    bottom: 10,
    image: sub,
  },
  {
    width: 157,
    bottom: 8,
    image: mainCharacter,
  },
];

/** 저작권 표시 문구 */
export const descriptionSectionBottomText =
  '©2025 BeenIruda and GyuZero. All Rights Reserved.';

/** 핸드폰 기종별 화면 비율 데이터 */
export interface PhoneModelProps {
  division: string; //기종분류(애플,안드로이드)
  name: string; //기종이름
  width: number; //배경화면너비
  height: number; //배경화면높이
  profileWidth: number; //프로필화면너비비율
  profileHeight: number; //프로필화면높이비율
  profileTopRatio: number; //프로필화면위치(top비율)
}

export const phoneModels = [
  {
    division: 'apple',
    name: 'iPhone 13 Mini',
    width: 666,
    height: 1440,
    profileWidth: 177,
    profileHeight: 177,
    profileTopRatio: 0.61,
  },
  {
    division: 'apple',
    name: 'iPhone 12 Pro',
    width: 1170,
    height: 2532,
    profileWidth: 300,
    profileHeight: 300,
    profileTopRatio: 0.613,
  },
  {
    division: 'apple',
    name: 'iPhone 15 Pro',
    width: 1179,
    height: 2256,
    profileWidth: 300,
    profileHeight: 300,
    profileTopRatio: 0.616,
  },
  {
    division: 'android',
    name: 'Galaxy S23+',
    width: 1080,
    height: 2266,
    profileWidth: 263,
    profileHeight: 263,
    profileTopRatio: 0.62,
  },
  {
    division: 'android',
    name: 'Galaxy S25 울트라',
    width: 1080,
    height: 2205,
    profileWidth: 280,
    profileHeight: 280,
    profileTopRatio: 0.61,
  },
  {
    division: 'android',
    name: 'Galaxy S24',
    width: 1080,
    height: 2340,
    profileWidth: 263,
    profileHeight: 263,
    profileTopRatio: 0.63,
  },
  {
    division: 'android',
    name: 'Galaxy S21',
    width: 1080,
    height: 2256,
    profileWidth: 300,
    profileHeight: 300,
    profileTopRatio: 0.62,
  },
  {
    division: 'android',
    name: 'Z Flip 4',
    width: 1080,
    height: 2640,
    profileWidth: 300,
    profileHeight: 300,
    profileTopRatio: 0.6125,
  },
];
