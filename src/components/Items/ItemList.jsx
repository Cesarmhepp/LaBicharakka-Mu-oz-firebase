import { Col } from 'react-bootstrap'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <Col key={product.id}>
                    <Item product={product}/>
                </Col>
            ))}
        </>
    )
}

export default ItemList