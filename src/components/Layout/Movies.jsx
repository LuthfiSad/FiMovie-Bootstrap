import { useEffect, useState } from "react";
import { Col, Container, InputGroup, Row, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import CardBs from "../Fragments/CardBs";
import SearchIcon from "../../assets/search.jsx";
import { getSearchMovies } from "../../services/movie.service";
import CardPlaceholder from "../Fragments/CardPlaceholder.jsx";
import Loading from "../../assets/loading.jsx";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryMovie = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [focusInput, setFocusInput] = useState(false);
  const getRandomLetter = () => {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var randomLetter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    console.log(randomLetter);
    return randomLetter;
  };

  const input = {
    maxWidth: focusInput ? "400px" : "140px",
    transition: "max-width 0.5s",
  };

  useEffect(() => {
    setMovies([]);
    Array(20)
      .fill(null)
      .map((item, index) => {
        console.log(item, index);
      });
    getSearchMovies(queryMovie || getRandomLetter())
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [queryMovie]);
  return (
    <Container
      id="movies"
      className="d-flex text-white flex-column justify-content-center align-items-center gap-3 bg-black py-5"
      fluid
    >
      <div className="d-flex flex-column  justify-content-center align-items-center text-center">
        <h1>Movies</h1>
        <InputGroup style={input} className="mb-3">
          <InputGroup.Text>
            <SearchIcon
              style={{
                transform: focusInput ? "rotate(-360deg)" : "",
                transition: "transform 0.5s",
              }}
            />
          </InputGroup.Text>
          <Form.Control
            style={{ border: "none", boxShadow: "none" }}
            onFocus={() => setFocusInput(true)}
            onBlur={() => setFocusInput(false)}
            onChange={(e) => setSearchParams({ query: e.target.value })}
            placeholder="Search..."
            value={queryMovie}
            type="search"
          />
        </InputGroup>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ratione
          harum. At, accusantium natus aliquid, doloremque magnam saepe eveniet
          est quo consectetur, debitis laborum error ratione quisquam nostrum!
          Laboriosam veniam eveniet, iste ea dolorem animi rem vitae asperiores
          corrupti nemo!
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
};

export default Movies;
