import Carousel from "../components/Carousel";

const images = [
  { src: "/assets/carousel/01.png", alt: "TapIT Invoices - Slide 1" },
  { src: "/assets/carousel/02.png", alt: "TapIT Invoices - Slide 2" },
  { src: "/assets/carousel/03.png", alt: "TapIT Invoices - Slide 3" },
  { src: "/assets/carousel/04.png", alt: "TapIT Invoices - Slide 4" },
];

export default function ProductCarousel() {
  return (
    <section
      className="ti-band ti-band-carousel ti-reveal"
      id="carousel"
      data-ti-animate
      style={{ "--ti-delay": "60ms" }}
    >
      <div className="ti-wrap ti-carousel-wrap">
        <p className="ti-carousel-top">
          Check the carousel — yes, it’s really that fast.
        </p>

        <div className="ti-carousel-stage">
          <Carousel images={images} />
        </div>

        <p className="ti-carousel-bottom">Open. Fill. Generate. Send.</p>
      </div>
    </section>
  );
}
