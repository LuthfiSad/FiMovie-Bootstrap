import Carousel from "react-bootstrap/Carousel";

function Hero() {
  const heroCarousel = [
    {
      id: 1,
      title: "Eksplorasi Dunia Sinematik",
      img: "eksplorasi+dunia+sinematik",
      desc: "Temukan keindahan sinema melalui ragam genre film yang menghibur dan menginspirasi.",
    },
    {
      id: 2,
      title: "Pemburu Kenangan",
      img: "pemburu+kenangan",
      desc: "Nostalgia dengan film-film klasik dan temukan kembali kenangan indah melalui layar.",
    },
    {
      id: 3,
      title: "Voyage of Imagination",
      img: "voyage+of+imagination",
      desc: "Berlayarlah melintasi samudra imajinasi dengan film-film epik yang memikat dan mencerahkan.",
    },
  ];

  return (
    <Carousel id="home">
      {heroCarousel.map((hero) => (
        <Carousel.Item key={hero.id} interval={10000}>
          <img
            src={`https://source.unsplash.com/800x400/?${hero.img}`}
            style={{ height: "100vh", width: "100%", objectFit: "cover" }}
            alt=""
          />
          <Carousel.Caption>
            <h3>{hero.title}</h3>
            <p>{hero.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;
