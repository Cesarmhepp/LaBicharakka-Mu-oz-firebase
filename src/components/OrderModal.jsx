import { Button, Form, Modal } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import { CartContext } from './Context/CartContext';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebase'

const OrderModal = () => {
    const { cartItems, totalPay } = useContext(CartContext);

    const [smShow, setSmShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);

    const buyer = {
        name: name,
        email: email,
        phone: phone
    }

    const itemsToBuy = cartItems.map(item => {
        return {
            id: item.id,
            name: item.name,
            price: item.price,
            qty: item.qty
        }
    })

    const order = { buyer: buyer, items: itemsToBuy, date: Timestamp.fromDate(new Date()), total: totalPay() }

    const createOrder = () => {
        addDoc(collection(db, "orders"), order)
            .then(doc => {
                alert("Su orden de compra a sido generada, su codigo de seguimiento es: " + doc.id)
                setSmShow(false)
            })
            .catch(err => { alert("Ha ocurrido un error al generar la compra, intentelo mas tarde.") })
    }

    return (
        <>
            <Button onClick={() => setSmShow(true)}>Ordenar</Button>{' '}

            <Modal
                size="lg"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton className='bg-btn'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Orden de compra
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={event => setName(event.target.value)} type="email" placeholder="Juan Perez" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control onChange={event => setEmail(event.target.value)} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Nunca compartiremos tu correo con alguien mas.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Número de contacto</Form.Label>
                            <Form.Control onChange={event => setPhone(event.target.value)} type="phone" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-btn'>
                    <Button variant="warning" style={{ marginRight: 5 }} onClick={() => setSmShow(false)}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={() => createOrder()}>
                        Ordenar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )

}


export default OrderModal