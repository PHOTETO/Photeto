import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { phoneModels } from '../constants/home';
import SelectPhoneModel from '../components/create/PhoneModelSelect';
import Preview from '../components/create/Preview';
import ButtonSet from '../components/create/ButtonSet';

const PREVIEW_HEIGHT = 620; //미리보기 화면 높이 고정

const CreateKakao = () => {
  const [selectedPhone, setSelectedPhone] = useState(phoneModels[0]);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null); // 캡처할 미리보기 영역
  const [previewWidth, setPreviewWidth] = useState(
    (PREVIEW_HEIGHT * phoneModels[0].width) / phoneModels[0].height
  ); //미리보기 화면 너비 계산

  // 선택된 핸드폰 기종이 바뀔 때마다 previewWidth 업데이트
  useEffect(() => {
    setPreviewWidth(
      (PREVIEW_HEIGHT * selectedPhone.width) / selectedPhone.height
    );
    console.log('width:', previewWidth);
  }, [selectedPhone]);

  return (
    <Layout>
      <Banner>카카오톡 프로필 &amp; 배경을 하나의 사진처럼!</Banner>
      <Contents>
        <div className="previewSet">
          {/** 핸드폰 기종 선택 */}
          <SelectPhoneModel
            selectedPhone={selectedPhone}
            setSelectedPhone={setSelectedPhone}
          />
          {/** 미리보기 화면 */}
          <Preview
            width={previewWidth}
            height={PREVIEW_HEIGHT}
            backgroundImage={backgroundImage}
          />
        </div>
        {/** 버튼셋(사진업로드, 다운로드) */}
        <ButtonSet
          setBackgroundImage={setBackgroundImage}
          previewRef={previewRef}
        />
      </Contents>
    </Layout>
  );
};

export default CreateKakao;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  width: 100%;
  height: 62px;

  background: #ffdc75;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;

  .previewSet {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
    padding: 20px 0;

    background: #eeeeee;
    border-radius: 10px;
  }
`;
