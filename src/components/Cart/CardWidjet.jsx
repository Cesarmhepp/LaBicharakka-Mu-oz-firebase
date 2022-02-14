import { Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { CartContext } from '../../components/Context/CartContext'
import { Link } from 'react-router-dom'

const CardWidjet = () => {


    const { cartItemsQnt } = useContext(CartContext);
    return <>
        <Link to={"/cart"}>
            <Button variant="warning">
                <BsCart2 />
                <a href="/#" style={{ marginLeft: 3, textDecoration: 'none', color:'black' }}>{cartItemsQnt()}</a>
            </Button>
        </Link>

    </>


}

export default CardWidjet