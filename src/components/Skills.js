import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assests/img/meter1.svg";
import meter2 from "../assests/img/meter2.svg";
import meter3 from "../assests/img/meter3.svg";
import colorSharp from "../assests/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen. No sólo sobrevivió 500 años, sino
                que tambien ingresó como texto de relleno en documentos
                electrónicos, quedando esencialmente igual al original. Fue
                popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente
                con software de autoedición, como por ejemplo Aldus PageMaker,
                el cual incluye versiones de Lorem Ipsum.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Backend Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Mobile Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
