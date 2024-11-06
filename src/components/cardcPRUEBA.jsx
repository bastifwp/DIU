import { CarouselHero } from "@ussebastian/kitdigital-react";

const CarouselHeroExample = () => {
  return (
    <section className="container">
      <div className="m-16 ">
        <CarouselHero>
          <CarouselHero.Item
            backgroundImg={
              <img
                src="https://dummyimage.com/1400x1:1/"
                alt="alt_image"
                className="uss-hero__image"
              />
            }
          >
            <p className="uss-h2 uss-hero__title">
              Lorem ipsum dolor sit amet, consecteturd adipiscing elit
            </p>
            <p className="uss-hero__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla.
            </p>
            <a href="#" className="uss-btn uss-btn--tertiary">
              <i className="uss-icon ri-arrow-right-circle-line"></i>Boton
              Terciario
            </a>
          </CarouselHero.Item>
          <CarouselHero.Item
            backgroundImg={
              <img src="https://dummyimage.com/1400x1:1/" alt="alt_image" />
            }
          >
            <p className="uss-h2 uss-hero__title">
              Lorem ipsum dolor sit amet, consecteturd adipiscing elit
            </p>
            <p className="uss-hero__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla.
            </p>
            <a href="#" className="uss-btn uss-btn--tertiary">
              <i className="uss-icon ri-arrow-right-circle-line"></i>Boton
              Terciario
            </a>
          </CarouselHero.Item>
          <CarouselHero.Item
            backgroundImg={
              <img src="https://dummyimage.com/1400x1:1/" alt="alt_image" />
            }
          >
            <p className="uss-h2 uss-hero__title">
              Lorem ipsum dolor sit amet, consecteturd adipiscing elit
            </p>
            <p className="uss-hero__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla.
            </p>
            <a href="#" className="uss-btn uss-btn--tertiary">
              <i className="uss-icon ri-arrow-right-circle-line"></i>Boton
              Terciario
            </a>
          </CarouselHero.Item>
        </CarouselHero>
      </div>
    </section>
  );
};

export default CarouselHeroExample;