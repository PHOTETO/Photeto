// 핸드폰 화면 미리보기 컴포넌트

import { styled } from 'styled-components';
import {
  CallIconSVG,
  ChatIconSVG,
  FaceTalkIconSVG,
} from '../../assets/svg/IconSVG';

interface Props {
  width: number;
  height: number;
  backgroundImage: string | null;
}

const Preview = ({ width, height, backgroundImage }: Props) => {
  return (
    <PreviewScreen
      $width={width}
      $height={height}
      $backgroundImage={backgroundImage}
    >
      <div className="title">미리보기</div>
      <div className="profile">
        <div className="name">감자님의 프로필</div>
      </div>
      <div className="bottom">
        <li>
          <div id="svg">
            <ChatIconSVG />
          </div>
          <div>1:1채팅</div>
        </li>
        <li>
          <div id="svg">
            <CallIconSVG />
          </div>
          <div>통화하기</div>
        </li>
        <li>
          <div id="svg">
            <FaceTalkIconSVG />
          </div>
          <div>페이스톡</div>
        </li>
      </div>
    </PreviewScreen>
  );
};
export default Preview;
const PreviewScreen = styled.div<{
  $width: number;
  $height: number;
  $backgroundImage: string | null;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;

  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;

  border-radius: 20px;
  background: ${(props) =>
    props.$backgroundImage
      ? `url(${props.$backgroundImage}) center/cover no-repeat`
      : '#000'};

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  color: #fff;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    width: 100px;
    height: 30px;

    border-radius: 20px;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

    color: #5e5e5e;
  }
  .profile {
    position: absolute;
    height: 11.77%;
    aspect-ratio: 1/1;
    left: 50%;
    top: 60.8%;
    transform: translate(-50%, 0%);

    border-radius: 30px;
    background: #fff;

    .name {
      display: flex;
      justify-content: center;
      width: 100%;
      white-space: nowrap;
      position: absolute;
      bottom: -9px;
      transform: translate(0, 100%);

      font-size: 0.875rem;
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    width: 100%;
    height: 106px;

    border-top: 1px solid #fff;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      font-size: 10px;

      #svg {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 15px;
      }
    }
  }
`;
