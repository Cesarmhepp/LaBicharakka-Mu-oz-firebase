import { Button, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Item = ({ product }) => {
    const { id, title, price, thumbnail, attributes } = product
    const navigate = useNavigate()
    
    const GoToItemDetail = () => {
        
        navigate(`/product/${id}`)
    }
    return (
        <>
            <Card>
                <Card.Img variant="top" src={thumbnail} style={{ marginTop: 10, objectFit: "contain", width: '100%', height: '110px', minHeight: '110px' }} />
                <Card.Body className="card bg-details" variant="custom" >
                    <Card.Title style={{ fontSize: 17, textAlign: "left" }}>{title}</Card.Title>
                </Card.Body>
                <Card.Header>Detalles</Card.Header>
                <ListGroup>
                    <ListGroup.Item>${price}</ListGroup.Item>
                    <ListGroup.Item>Marca {attributes[0].value_name}</ListGroup.Item>
                </ListGroup>
                <Button variant="warning" onClick={() => GoToItemDetail()}>Ver caracteristicas</Button>
            </Card>

        </>

    )
}

export default Item