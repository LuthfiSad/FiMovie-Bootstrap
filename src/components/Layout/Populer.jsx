import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBs from "../Fragments/CardBs";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/movie.service";
import CardPlaceholder from "../Fragments/CardPlaceholder";

function Populer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies().then((res) => {
      setMovies(res);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return (
    <Container
      id="populer"
      className="d-flex text-white flex-column justify-content-center align-items-center gap-3 bg-black py-5"
      fluid
    >
      <div className="text-center">
        <h1>Populer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          inventore quaerat? Nobis impedit dicta doloribus qui inventore quidem
          ipsam ex, vitae nostrum, excepturi culpa repudiandae dolor asperiores
          maiores eius quam?
        </p>
      </div>
      <Row
        className="justify-content-center w-100"
        style={{ minHeight: "200px" }}
      >
        {!movies.length && !loading ? (
          <div
            className="w-100 d-flex justify-content-center align-items-center"
            style={{ cursor: "not-allowed", minHeight: "100%" }}
          >
            <p className="m-0 text-danger">No results</p>
          </div>
        ) : (
          <>
            {loading
              ? Array(20).fill(null).map((movie, index) => (
                  <Col
                    xs={12}
                    sm={6}
                    lg={4}
                    xl={3}
                    className="p-1 p-lg-2"
                    key={index}
                  >
                    <CardPlaceholder />
                  </Col>
                ))
              : movies.map((movie) => (
                  <Col
                    xs={12}
                    sm={6}
                    lg={4}
                    xl={3}
                    className="p-1 p-lg-2"
                    key={movie.id}
                  >
                    <CardBs
                      title={movie.title}
                      img={movie.poster_path}
                      id={movie.id}
                    />
                  </Col>
                ))}
          </>
        )}
      </Row>
    </Container>
  );
}

export default Populer;
