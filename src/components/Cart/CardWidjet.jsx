import { Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { CartContext } from '../../components/Context/CartContext'
import {Link} from 'react-router-dom'

const CardWidjet = () => {


    const { CartItemsQnt } = useContext(CartContext);
    return <>
        <Link to={"/cart"}>
            <Button variant="warning">
                <a><BsCart2 /></a>
                <a style={{ marginLeft: 3 }}>{CartItemsQnt()}</a>
            </Button>
        </Link>

    </>


}

export default CardWidjet