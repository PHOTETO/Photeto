import kakaoIcon from "@/assets/images/main/button/kakaoIcon.png";
import instagramIcon from "@/assets/images/main/button/instagramIcon.png";

import slide1 from "@/assets/images/main/slide/slide1.png";
import slide2 from "@/assets/images/main/slide/slide2.png";
import slide3 from "@/assets/images/main/slide/slide3.png";
import slide4 from "@/assets/images/main/slide/slide4.png";

import mainCharacter from "@/assets/images/main/description/mainCharacter.png";
import sub from "@/assets/images/main/description/sub.png";
import title from "@/assets/images/main/description/title.png";
import what from "@/assets/images/main/description/what.png";

export const linkButtons = [
    {
        title: "카톡 프로필 만들러 가기",
        image: kakaoIcon,
        color: "#391B1B",
    },
    {
        title: "인스타 썸네일 만들러 가기",
        image: instagramIcon,
        color: "linear-gradient(90deg, #8a2be2, #ff0066);"
    }
];

export const mainSlideImages = [
    slide1, slide2, slide3, slide4
];

export const descriptionImageObject = [
    {
        width: 47,
        bottom: 10,
        image: what
    },
    {
        width: 250,
        bottom: 3,
        image: title
    },
    {
        width: 218,
        bottom: 10,
        image: sub
    },
    {
        width: 157,
        bottom: 8,
        image: mainCharacter
    },
];

export const descriptionSectionBottomText = "©2025 BeenIruda and GyuZero. All Rights Reserved.";