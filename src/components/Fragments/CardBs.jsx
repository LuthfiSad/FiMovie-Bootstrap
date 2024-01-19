import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardBs({title, img, id}) {
  return (
    <Card className='text-white text-center' bg='dark' style={{ width: '100%', height: '100%' }}>
      <Card.Img variant="top" src={`${import.meta.env.REACT_APP_BASEIMGURL}/${img}`} style={{height: '300px', objectFit: 'cover'}} />
      <Card.Body className='py-2 d-flex flex-column justify-content-between align-items-center'>
        <Card.Title as="p">{title}</Card.Title>
        <Link to={`/movie/${id}`}>
        <Button size='sm' variant="secondary">Lihat Detail</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardBs;