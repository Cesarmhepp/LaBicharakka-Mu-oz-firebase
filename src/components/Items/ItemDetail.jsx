import { Image, Row, Col, Table, Button } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { CartContext } from '../Context/CartContext';
const ItemDetail = ({ item, id }) => {
	const [itemsQty, setItemsQty] = useState(1);
	const [show, setShow] = useState(false)
	item.id = id;

	const onAdd = ({ quantityToAdd }) => {
		return (
			<Link to={"/cart"}><Cart quantityToAdd={quantityToAdd} /></Link>
		)
	}

	const { addItem } = useContext(CartContext);
	return (
		<>
			<Row style={{ marginLeft: 100, marginRight: 100 }}>
				<Col xs={1}>
					<Image src={item.imageURL} style={{ objectFit: "contain", width: '80%' }} />
				</Col>
				<Col xs={3}>
					{item.imageURL != null ? <Image src={item.imageURL} style={{ objectFit: "contain", width: '100%' }} /> : null}

				</Col>
				<Col xs={8} style={{ textAlign: "left" }} >
					<h3 style={{ textAlign: "left" }}>{item.name}</h3>
					<Table size="sm" responsive  >
						<tbody>
							<tr>
								<td>Precio</td>
								<td>${item.price}</td>
							</tr>
							<tr>
								<td>Stock</td>
								<td>{item.stock}</td>
							</tr>
						</tbody>
					</Table>

					<Button style={{ marginRight: 10 }} variant="warning" onClick={() => itemsQty > 1 ? setItemsQty(itemsQty - 1) : null}> - </Button>
					<a href="/#" style={{ textDecoration: 'none', color:'black' }}>
						{itemsQty}
					</a>
					<Button style={{ marginLeft: 10 }} variant="warning" onClick={() => itemsQty < item.stock ? setItemsQty(itemsQty + 1) : null}> + </Button>

					<Button style={{ marginLeft: 10 }} variant="primary" onClick={() => { addItem(item, itemsQty); setShow(true) }}> Añadir</Button>

					{
						show ? <Link to={"/cart"}><Button style={{ marginLeft: 10 }} variant='primary' onClick={() => onAdd(itemsQty)}>Finalizar</Button> </Link> : null
					}
				</Col>


				<Col style={{ textAlign: "left", marginBottom: 50 }}>
					<h3>Descripción</h3>
					{item.description}
				</Col>

			</Row>




		</>
	);

}

export default ItemDetail