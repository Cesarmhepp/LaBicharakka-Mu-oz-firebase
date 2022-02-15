import { Button } from 'react-bootstrap'
import { React } from 'react'
import { FiUser } from 'react-icons/fi'

const ModalLogin = () => {

    return <>
        <Button variant="warning" className="outline-success" style={{marginLeft:10}}>
            <b><FiUser/></b>Iniciar
        </Button>

    </>
}

export default ModalLogin