import { useEffect, useState } from "react";
import { Card, Col, Placeholder, Row } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import StarFill from "../assets/star-fill.jsx";
import Star from "../assets/star.jsx";
import Loading from "../assets/loading.jsx";
import { getDetailMovie } from "../services/movie.service.js";
import Footer from "../components/Layout/Footer.jsx";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDetailMovie(id).then((res) => {
      setMovie(res);
      setLoading(false);
    }).catch((err) => {
      alert(err);
      navigate("/movie");
    })
  }, [id]);

  return (
    <>
    <div className="bg-black min-vh-100 p-5">
      <h1 className="text-center text-white mb-3">Movie Detail Page</h1>
      <div className="container border rounded position-relative p-3">
        <Link to="/movie">
          <button
            type="button"
            className="btn-close position-absolute top-0 start-0 translate-middle rounded-circle p-2 bg-danger opacity-100"
            aria-label="Close"
          ></button>
        </Link>
        {loading ? (
          <Row>
            <Col xs={12} md={4}>
              <div
                className="w-100 border border-dark d-flex justify-content-center align-items-center rounded overflow-hidden"
                style={{ minHeight: "300px", cursor: "wait" }}
              >
                <Loading />
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Card
                bg="dark"
                className="text-white"
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Placeholder
                    as={Card.Title}
                    className="d-flex align-items-center gap-3"
                    animation="glow"
                  >
                    <Placeholder xs={5} />
                    <div
                      className="position-relative star"
                      style={{ width: "15px", height: "15px" }}
                    >
                      <StarFill
                        className="position-absolute start-0 h-100 w-100"
                        color="yellow"
                        style={{ zIndex: "-1" }}
                      />
                      <div
                        className="position-absolute bg-dark start-0 top-0 w-100"
                        style={{ height: "0%" }}
                      ></div>
                      <Star
                        className="position-absolute start-0 h-100 w-100"
                        color="yellow"
                      />
                    </div>
                    <Placeholder xs={1} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={2} /> <br />
                    <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                  </Placeholder>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} md={4}>
              <div
                className="w-100 border border-dark rounded overflow-hidden"
                style={{ minHeight: "300px" }}
              >
                <img
                  src={`${import.meta.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                  style={{ objectFit: "cover", width: "100%" }}
                  alt=""
                />
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Card
                bg="dark"
                className="text-white"
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Card.Title className="d-flex align-items-center gap-3">
                    {movie.title}
                    <div className="d-flex align-items-center gap-1">
                      <div
                        className="position-relative star"
                        style={{ width: "15px", height: "15px" }}
                      >
                        <StarFill
                          className="position-absolute start-0 h-100 w-100"
                          color="yellow"
                          style={{ zIndex: "-1" }}
                        />
                        <div
                          className="position-absolute bg-dark start-0 top-0 w-100"
                          style={{ height: `${120-(movie.vote_average * 10)}%` }}
                        ></div>
                        {console.log(100-(movie.vote_average * 1))}
                        <Star
                          className="position-absolute start-0 h-100 w-100"
                          color="yellow"
                        />
                      </div>
                      <p
                        className="m-0 fst-italic fw-normal"
                        style={{ fontSize: "12px" }}
                      >
                        {movie.vote_average}({movie.vote_count})
                      </p>
                    </div>
                  </Card.Title>
                  <p className="m-0 fw-medium" style={{ fontSize: "12px" }}>
                    Gendre : {movie.genres.map((g) => g.name).join(", ")}
                  </p>
                  <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default MovieDetailPage;
