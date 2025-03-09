import styled from "styled-components";
import Slide from "../common/Slide";
import { mainSlideImages } from "../../constants/home.ts";

const MainSection = () => {
  return (
    <Container>
      <MainImageSlider>
        <Slide images={mainSlideImages} />
      </MainImageSlider>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainImageSlider = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: calc(100% - 40px);
  overflow: hidden;
  padding: 0;
  margin-top: 20px;
  border-radius: 10px;
`;

export default MainSection;
