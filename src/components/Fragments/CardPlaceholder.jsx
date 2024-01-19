import { Placeholder } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Loading from "../../assets/loading";

function CardPlaceholder({ title, img, id }) {
  return (
    <Card
      className="text-white text-center"
      bg="dark"
      style={{ width: "100%", height: "100%" }}
    >
      <div
        className="card-img-top bg-black d-flex justify-content-center align-items-center"
        style={{ height: "300px", cursor: "wait" }}
      >
        <Loading />
      </div>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder.Button variant="secondary" xs={6} style={{ cursor: "wait" }} />
      </Card.Body>
    </Card>
  );
}

export default CardPlaceholder;
