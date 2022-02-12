import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { getCategories } from '../../services/Products';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Categories = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        let mounted = true
        getCategories("MLC").then(results => {
            if (mounted) {
                setCategories(results)
            }
        })
        return () => mounted = false;
    }, [])

    return (
        <Row>
            {categories.map(category => {
                return (
                    <Col xs={3}  style={{marginTop:10, marginBottom:10}}>
                        <Card className="card bg-details">
                            <Card.Title style={{ height: 80, paddingTop: 5 }}>{category.name}</Card.Title>
                            <Button variant="warning" onClick={() => navigate(`/category/${category.id}`)}>Ver Catalogo</Button>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )

}



export default Categories