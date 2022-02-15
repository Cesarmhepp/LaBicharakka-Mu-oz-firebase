import React from 'react'
import { Button, Image } from 'react-bootstrap'

const CartItem = ({ item, index, removeItem }) => {
    return (
        <tr style={{ verticalAlign: 'middle' }} key={index} >
            <td>{index + 1}</td>
            <td><Image src={item.imageURL} style={{ width: '5%', marginRight: 15 }} />{item.name}</td>
            <td style={{ textAlign: 'center' }}>{item.qty}</td>
            <td style={{ textAlign: 'center' }}>{item.price}</td>
            <td style={{ textAlign: 'center' }}>{item.qty * item.price}</td>
            <td style={{ textAlign: 'center' }}><Button variant="danger" onClick={() => removeItem(item)}>X</Button></td>
        </tr>
    )

}

export default CartItem