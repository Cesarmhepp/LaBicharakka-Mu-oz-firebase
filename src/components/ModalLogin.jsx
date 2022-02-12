import { Form, Button, Modal, Row, Col } from 'react-bootstrap'
import { React, useState } from 'react'
import { FiUser } from 'react-icons/fi'

const ModalLogin = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return <>
        <Button variant="warning" onClick={handleShow} className="outline-success" style={{marginLeft:10}}>
            <a><FiUser/></a>Iniciar
        </Button>
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton className='bg-warning' >
                <Modal.Title>Iniciar Sesion</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-light'>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Correo
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Contraseña
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='bg-warning'>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Iniciar
                </Button>
            </Modal.Footer>
        </Modal>

    </>
}

export default ModalLogin