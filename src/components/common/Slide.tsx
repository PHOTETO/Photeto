import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const Slide = ({ images }: { images: string[] }) => {

    return (
        <SwiperContainer>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {
                    images.map((image: string, index: number) =>{
                        return (
                            <SwiperSlide key={index}>
                                <img src={image}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </SwiperContainer>
    );
}

const SwiperContainer = styled.div`
    width: 100%;
    flex-basis: 100%;
    flex-shrink: 0;
    border-radius: 10px;
`;

export default Slide;