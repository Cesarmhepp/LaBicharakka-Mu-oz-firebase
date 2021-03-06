import { Button } from 'react-bootstrap'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css';
const ItemCount = ({ stock, itemsQty, setItemsQty, onAdd }) => {

    const [show, setShow] = useState(false)


    return <>

        <Button style={{ marginRight: 10 }} variant="warning" onClick={() => itemsQty > 0 ? setItemsQty(itemsQty - 1) : null}> - </Button>
        <b>
            {itemsQty}
        </b>
        <Button style={{ marginLeft: 10 }} variant="warning" onClick={() => itemsQty < stock ? setItemsQty(itemsQty + 1) : null}> + </Button>
        {
            show ? <Link to={"/cart"}><Button style={{ marginLeft: 10 }} variant='primary' onClick={() => onAdd(itemsQty)}>Finalizar</Button> </Link> : null
        }


    </>
}

export default ItemCount