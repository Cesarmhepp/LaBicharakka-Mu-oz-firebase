import { Button, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Item = ({ product }) => {
    const id = product.id
   //const { name, price, brand } = product.data()
    const navigate = useNavigate()

    const GoToItemDetail = () => {

        navigate(`/product/${id}`)
    }

    return (
        <>
            <Card>
                <Card.Img variant="top" src={product.data().imageURL}  style={{ marginTop: 10, objectFit: "contain", width: '100%', height: '110px', minHeight: '110px' }} />
                <Card.Body className="card bg-details" variant="custom" >
                    <Card.Title style={{ fontSize: 17, textAlign: "left" }}>{ product.data().name}</Card.Title>
                </Card.Body>
                <Card.Header>Detalles</Card.Header>
                <ListGroup>
                    <ListGroup.Item>${ product.data().price}</ListGroup.Item>
                    <ListGroup.Item>Marca { product.data().brand}</ListGroup.Item>
                </ListGroup>
                <Button variant="warning" onClick={() => GoToItemDetail()}>Ver caracteristicas</Button>
            </Card>

        </>

    )
}

export default Item