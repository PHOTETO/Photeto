import MainSection from '../components/home/MainSection.tsx';
import LinkSection from '../components/home/LinkSection.tsx';
import DescriptionSection from '../components/home/DescriptionSection.tsx';
import { mainLinkButtons } from '../constants/home.ts';

const Home = () => {
  return (
    <>
      <MainSection />
      <LinkSection linkSetData={mainLinkButtons} />
      <DescriptionSection />
    </>
  );
};

export default Home;
