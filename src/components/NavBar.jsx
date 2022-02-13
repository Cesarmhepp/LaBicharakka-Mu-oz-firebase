import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import React from 'react'
import logo from './img/logoBicharakka.png'
import { BsSearch } from 'react-icons/bs';
import ModalLogin from './ModalLogin'
import CardWidjet from './Cart/CardWidjet'
import { Link, NavLink } from 'react-router-dom'


const NavBar = ({ categories }) => {

    const onSearchChange = (event) => {
        event.preventDefault();
    }
    return <>

        <Navbar className='border-bottom bg-details' sticky='top'>

            <Container container-fluid>

                <Link to={"/"}>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="300"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Link>

                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Inicio</NavLink>

                    <NavDropdown title={"Categorias"} id="basic-nav-dropdown">
                        {categories.slice(0, 6).map(category => {
                            return (
                                <NavDropdown.Item key={category.id}
                                    as={Link}
                                    to={`/category/${category.data().name}`}>
                                    {category.data().name}
                                </NavDropdown.Item>)
                        })}
                        <NavDropdown.Item as={Link} to={`/categories`}>Ver todas</NavDropdown.Item>
                    </NavDropdown>
                    <Form className="d-flex" style={{ position: "relative" }}>
                        <FormControl
                            type="search"
                            onChange={onSearchChange}
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                        />
                        <div style={{ position: "absolute", left: 0, top: 0, wditrh: 200, height: 300 }}></div>
                        <Button variant="warning"><BsSearch /></Button>
                    </Form>


                </Nav>

                <CardWidjet />

                <ModalLogin />
            </Container>
        </Navbar>
    </>
}

export default NavBar