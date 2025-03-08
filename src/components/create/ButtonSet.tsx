import html2canvas from 'html2canvas';
import React from 'react';
import { styled } from 'styled-components';
import { PhoneModelProps } from '../../constants/home';

interface Props {
  setBackgroundImage: (image: string | null) => void;
  previewRef: React.RefObject<HTMLDivElement>;
  PREVIEW_HEIGHT: number;
  selectedPhone: PhoneModelProps;
}

const LoadButtonSet = ({
  setBackgroundImage,
  previewRef,
  PREVIEW_HEIGHT,
  selectedPhone,
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
    const previewElement = previewRef.current;
    if (!previewElement) {
      console.error('미리보기 요소를 찾을 수 없습니다.');
      return;
    }

    try {
      /** ✅ 1. 불필요한 UI 요소 숨기기 */
      const hiddenElements = previewElement.querySelectorAll(
        '.bottom, .title, .profile'
      );
      hiddenElements.forEach((el) => {
        (el as HTMLElement).style.display = 'none';
      });

      /** ✅ 2. 전체 배경 캡처 (scale = 2 적용) */
      const canvas = await html2canvas(previewElement, {
        useCORS: true,
        scale: 2, // 고해상도 캡처
      });

      /** ✅ 3. 숨긴 요소 복구 */
      hiddenElements.forEach((el) => {
        (el as HTMLElement).style.display = '';
      });

      /** ✅ 4. 배경 이미지 다운로드 */
      const backgroundImage = canvas.toDataURL('image/png');
      const backgroundLink = document.createElement('a');
      backgroundLink.href = backgroundImage;
      backgroundLink.download = 'background.png';
      document.body.appendChild(backgroundLink);
      backgroundLink.click();
      document.body.removeChild(backgroundLink);

      /** ✅ 5. 선택된 기종의 프로필 정보 가져오기 */
      const { width, height, profileWidth, profileHeight, profileTopRatio } =
        selectedPhone;

      /** ✅ 6. 미리보기 화면 비율 조정 */
      const previewWidth = (PREVIEW_HEIGHT * width) / height; // 미리보기 화면 비율 적용

      /** ✅ 7. 프로필 크기 비율 조정 (PREVIEW_HEIGHT 기준) */
      const adjustedProfileWidth = (profileWidth * PREVIEW_HEIGHT) / height;
      const adjustedProfileHeight = (profileHeight * PREVIEW_HEIGHT) / height;

      /** ✅ 8. 프로필 위치 조정 */
      const profileTop = Math.round(PREVIEW_HEIGHT * profileTopRatio);
      const profileLeft = Math.round((previewWidth - adjustedProfileWidth) / 2); // 중앙 정렬

      /** ✅ 9. 크롭 좌표 변환 (scale 고려) */
      const x = Math.round(profileLeft * 2); // 좌표 정수 변환 (scale 2 적용)
      const y = Math.round(profileTop * 2);
      const widthScaled = Math.round(adjustedProfileWidth * 2);
      const heightScaled = Math.round(adjustedProfileHeight * 2);

      /** ✅ 10. 프로필 부분 잘라내기 */
      const croppedCanvas = document.createElement('canvas');
      croppedCanvas.width = widthScaled;
      croppedCanvas.height = heightScaled;
      const ctx = croppedCanvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(
          canvas,
          x,
          y,
          widthScaled,
          heightScaled,
          0,
          0,
          widthScaled,
          heightScaled
        );
        const profileImage = croppedCanvas.toDataURL('image/png');

        /** ✅ 11. 프로필 이미지 다운로드 */
        const profileLink = document.createElement('a');
        profileLink.href = profileImage;
        profileLink.download = 'profile.png';
        document.body.appendChild(profileLink);
        profileLink.click();
        document.body.removeChild(profileLink);
      }
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
