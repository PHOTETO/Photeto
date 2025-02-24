import html2canvas from 'html2canvas';
import React from 'react';
import { styled } from 'styled-components';

interface Props {
  setBackgroundImage: (image: string | null) => void;
  previewRef: React.RefObject<HTMLDivElement>;
}
const LoadButtonSet = ({ setBackgroundImage, previewRef }: Props) => {
  // 배경 이미지 선택 함수
  const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setBackgroundImage(imageUrl);
    }
  };

  // 미리보기 화면 캡처 후 다운로드
  const handleDownload = async () => {
    if (!previewRef.current) return;

    try {
      const canvas = await html2canvas(previewRef.current, {
        useCORS: true, // CORS 이슈 해결 (필요할 경우 이미지 서버에서 CORS 설정)
        scale: 2, // 해상도 개선
      });

      const image = canvas.toDataURL('image/png'); // 캡처된 화면을 PNG로 변환
      const link = document.createElement('a');
      link.href = image;
      link.download = 'kakao_profile_preview.png'; // 다운로드 파일명 설정
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
