import { Carousel } from "@mantine/carousel";
import { ContentCarousel } from "./styles";

const CarouselLogin = () => {
  return (
    <ContentCarousel>
      <Carousel
        sx={{ maxWidth: 320 }}
        mx="auto"
        withIndicators
        height={200}
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: "width 250ms ease",

            "&[data-active]": {
              width: 40,
            },
          },
        }}
      >
        <Carousel.Slide>
          <img src="../../../assets/imagem3.svg" alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="../../../assets/imagem2.svg" alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src="../../../assets/imagem1.svg" alt="" />
        </Carousel.Slide>
      </Carousel>
    </ContentCarousel>
  );
};

export default CarouselLogin;
