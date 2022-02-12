import { Image, Row, Col, Table, Button } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import Cart from '../Cart/Cart'
import { CartContext } from '../Context/CartContext';
const ItemDetail = ({ item }) => {
	const { id, title, price, description, attributes, available_quantity, pictures } = item;
	const [itemsQty, setItemsQty] = useState(1);
	const [show, setShow] = useState(false)

	const onAdd = ({ quantityToAdd }) => {
		return (
			<Link to={"/cart"}><Cart quantityToAdd={quantityToAdd} /></Link>
		)
	}

	const { AddItem, isInCart, cartItems } = useContext(CartContext);
	console.log("Lista en el carrito: ",cartItems)


	return (
		<>
			<Row style={{ marginLeft: 100, marginRight: 100 }}>
				<Col xs={1}>
					{pictures.slice(0, 4).map(picture => { return (<Image src={picture.secure_url} style={{ objectFit: "contain", width: '80%' }} />) })}
				</Col>
				<Col xs={3}>
					{pictures.length > 0 ? <Image src={pictures[0].secure_url} style={{ objectFit: "contain", width: '100%' }} /> : null}

				</Col>
				<Col xs={8} style={{ textAlign: "left" }} >
					<h3 style={{ textAlign: "left" }}>{title}</h3>
					<Table size="sm" responsive  >
						<tbody>
							<tr>
								<td>Precio</td>
								<td>${price}</td>
							</tr>
							<tr>
								<td>Stock</td>
								<td>{available_quantity}</td>
							</tr>
						</tbody>
					</Table>

					<Button style={{ marginRight: 10 }} variant="warning" onClick={() => itemsQty > 1 ? setItemsQty(itemsQty - 1) : null}> - </Button>
					<a>
						{itemsQty}
					</a>
					<Button style={{ marginLeft: 10 }} variant="warning" onClick={() => itemsQty < available_quantity ? setItemsQty(itemsQty + 1) : null}> + </Button>

					<Button style={{ marginLeft: 10 }} variant="primary" onClick={() => { AddItem(item, itemsQty); setShow(true) }}> Añadir</Button>

					{
						show ? <Link to={"/cart"}><Button style={{ marginLeft: 10 }} variant='primary' onClick={() => onAdd(itemsQty)}>Finalizar</Button> </Link> : null
					}


					<Col xs={12} style={{ textAlign: "left", marginTop: 50 }}>
						<h5>Caracteristicas</h5>
						<Table size="sm" responsive>
							<tbody>
								{attributes.slice(0, 9).map(attribute => {
									return (
										<>
											<tr>
												<td>{attribute.name}</td>
												<td>{attribute.value_name}</td>
											</tr>
										</>
									)
								})}
							</tbody>
						</Table>

					</Col>

				</Col>


				<Col style={{ textAlign: "left", marginBottom: 50 }}>
					<h3>Descripción</h3>
					{description}
				</Col>

			</Row>




		</>
	);

}

export default ItemDetail