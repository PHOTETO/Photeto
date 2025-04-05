import styled from "styled-components";
import { descriptionImageObject, descriptionSectionBottomText } from "../../constants/home";

const DescriptionSection = () => {
    return (
        <DescriptionContainer>
            <DescriptionInner>
                <SectionImages>
                {
                    descriptionImageObject.map((obj, index) => {
                        return (
                            <SectionImage
                                src={obj.image}
                                key={index}
                                width={obj.width}
                                $bottomGap={obj.bottom}
                            />
                        )
                    })
                }
                </SectionImages>
            </DescriptionInner>
            <DescriptionBottomText>{ descriptionSectionBottomText }</DescriptionBottomText>
        </DescriptionContainer>
    );
};

const DescriptionContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: 500px;
    height: 50vh;
    max-height: 600px;
    background: ${({ theme }) => theme.sectionBackground};
`;

const DescriptionInner = styled.div`
    width: 100%;
    height: 90%;
    background-color: ${({ theme }) => theme.background};
    inset: 0;
`;

const SectionImages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 5%;
`;

const SectionImage = styled.img<{$bottomGap: number}>`
    margin-bottom: ${props => props.$bottomGap}%;
    &:first-child {
        margin-top: 5%;
    }
`;

const DescriptionBottomText = styled.p`
    text-align: center;
    font-size: 13px;
    color: #BBBBBB;
`;

export default DescriptionSection;
