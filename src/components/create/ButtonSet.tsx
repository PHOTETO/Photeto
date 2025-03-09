import React from 'react';
import { styled } from 'styled-components';
import { PhoneModelProps } from '../../constants/home';

interface Props {
  setBackgroundImage: (image: string | null) => void;
  selectedPhone: PhoneModelProps;
  backgroundImage: string | null;
}

const LoadButtonSet = ({
  setBackgroundImage,
  selectedPhone,
  backgroundImage,
}: Props) => {
  // 배경 이미지 선택 함수
  const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setBackgroundImage(imageUrl);
    }
  };

  // 배경사진 및 프로필사진 다운로드

  const handleDownload = async () => {
    if (!backgroundImage) {
      console.error('배경 이미지가 업로드되지 않았습니다.');
      return;
    }

    try {
      /** ✅ 1. 업로드한 원본 이미지를 `Image` 객체로 로드 */
      const img = new Image();
      img.src = backgroundImage;
      img.crossOrigin = 'Anonymous'; // CORS 문제 방지

      img.onload = () => {
        /** ✅ 2. 원본 이미지 크기 가져오기 */
        const imgWidth = img.width;
        const imgHeight = img.height;

        /** ✅ 3. 선택된 기종의 프로필 정보 가져오기 */
        const { height, profileWidth, profileHeight, profileTopRatio } =
          selectedPhone;

        /** ✅ 4. 프로필 크기 비율 조정 */
        const adjustedProfileWidth = (profileWidth * imgHeight) / height;
        const adjustedProfileHeight = (profileHeight * imgHeight) / height;

        /** ✅ 5. 프로필 위치 조정 */
        const profileTop = Math.floor(imgHeight * profileTopRatio);
        const profileLeft = Math.floor((imgWidth - adjustedProfileWidth) / 2); // 중앙 정렬

        /** ✅ 6. 전체 배경 다운로드 */
        const fullCanvas = document.createElement('canvas');
        fullCanvas.width = imgWidth;
        fullCanvas.height = imgHeight;
        const fullCtx = fullCanvas.getContext('2d');

        if (fullCtx) {
          fullCtx.drawImage(img, 0, 0, imgWidth, imgHeight);

          /** ✅ 7. 배경 이미지 저장 */
          const fullImage = fullCanvas.toDataURL('image/png');
          const fullLink = document.createElement('a');
          fullLink.href = fullImage;
          fullLink.download = 'background.png';
          document.body.appendChild(fullLink);
          fullLink.click();
          document.body.removeChild(fullLink);
        }

        /** ✅ 8. 크롭을 위한 `canvas` 생성 */
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = adjustedProfileWidth;
        croppedCanvas.height = adjustedProfileHeight;
        const ctx = croppedCanvas.getContext('2d');

        if (ctx) {
          ctx.imageSmoothingEnabled = false; // ✅ 블러 방지

          /** ✅ 9. 원본 이미지에서 프로필 부분만 크롭하여 `canvas`에 그림 */
          ctx.drawImage(
            img,
            profileLeft,
            profileTop,
            adjustedProfileWidth,
            adjustedProfileHeight,
            0,
            0,
            adjustedProfileWidth,
            adjustedProfileHeight
          );

          /** ✅ 10. 검정색 투명 필터 추가 */
          ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // 30% 투명 검정
          ctx.fillRect(0, 0, adjustedProfileWidth, adjustedProfileHeight);

          /** ✅ 11. 프로필 이미지 다운로드 */
          const profileImage = croppedCanvas.toDataURL('image/png');
          const profileLink = document.createElement('a');
          profileLink.href = profileImage;
          profileLink.download = 'profile.png';
          document.body.appendChild(profileLink);
          profileLink.click();
          document.body.removeChild(profileLink);
        }
      };
    } catch (error) {
      console.error('다운로드 실패:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '20px',
      }}
    >
      <label htmlFor="fileUpload">
        <HiddenFileInput
          id="fileUpload"
          type="file"
          accept="image/*"
          onChange={handleBackgroundChange}
        />
        <Button as="div" style={{ color: '#FF5050' }}>
          배경 사진 선택하기
        </Button>
      </label>
      <Button
        style={{ color: '#fff', background: '#FF5050' }}
        onClick={handleDownload}
      >
        프로필/배경사진 다운로드
      </Button>
    </div>
  );
};
export default LoadButtonSet;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
  font-size: 15px;
  cursor: pointer;
`;

// 파일 입력 숨기기
const HiddenFileInput = styled.input`
  display: none;
`;
