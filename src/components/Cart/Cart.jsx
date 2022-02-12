import { Table, Button, Row, Col, Container, Image } from 'react-bootstrap'
import React, { useContext } from 'react'
import { CartContext } from '../../components/Context/CartContext'
import SadImg from '../../components/img/sad-emoji.png'
import { Link } from 'react-router-dom'



const Cart = ({ quantityToAdd }) => {

    const { cartItems, CartItemsQnt, RemoveItem, totalPay } = useContext(CartContext);
    console.log(cartItems);


    return (


        <Container>
            <div>
                <Row>
                    <Col>

                        {
                            CartItemsQnt() !== 0 ?
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr style={{verticalAlign:'middle'}}>
                                            <th></th>
                                            <th style={{textAlign:'center'}}>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Precio unitario</th>
                                            <th>Precio total</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: 'left' }}>

                                        {
                                            cartItems.map((item, index) => (
                                                <>
                                                    <tr style={{verticalAlign:'middle'}}>
                                                        <td>{index + 1}</td>
                                                        <td><Image src={item.pictures[0].secure_url} style={{ width: '5%', marginRight: 15 }} />{item.title}</td>
                                                        <td style={{ textAlign: 'center'}}>{item.qty}</td>
                                                        <td style={{ textAlign: 'center'}}>{item.price}</td>
                                                        <td style={{ textAlign: 'center'}}>{item.qty * item.price}</td>
                                                        <td style={{ textAlign: 'center'}}><Button variant="danger" onClick={() => RemoveItem(item)}>X</Button></td>
                                                    </tr>
                                                </>
                                            ))
                                        }
                                        <tr style={{verticalAlign:'middle'}}>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td style={{ textAlign: 'center', fontWeight:'bold' }}>Total</td>
                                            <td style={{ textAlign: 'center', fontWeight:'bold' }}>
                                                {
                                                    totalPay()
                                                }
                                            </td>
                                            <td  style={{ textAlign: 'center', fontWeight:'bold' }}><Button variant="success">Pagar</Button></td>
                                        </tr>


                                    </tbody>
                                </Table>
                                : <div>
                                    <Container>
                                        <Row>
                                            <Col xs={12}>
                                                <Image src={SadImg} style={{ width: '20%', marginRight: 15, marginBottom: 30,marginTop:20 }} />
                                            </Col>
                                            <Col xs={12} style={{ marginBottom: 20 }}>
                                                <h3>Nada en el carrito... aun.</h3>
                                            </Col>
                                            <Col xs={12} style={{ marginBottom: 20 }}>
                                                <Link to="/"><Button variant='warning'>Ir a comprar =D!</Button></Link>
                                            </Col>
                                        </Row>
                                    </Container>

                                </div>


                        }


                    </Col>
                </Row>

            </div>
        </Container>

    )

}

export default Cart