import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategoriesFromFirebase } from '../../services/Products';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Categories = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        let mounted = true
        getCategoriesFromFirebase().then(results => {
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
                    <Col xs={3} style={{ marginTop: 10, marginBottom: 10 }}>
                        <Card className="card bg-details">
                            <Card.Title style={{ height: 80, paddingTop: 5 }}>{category.data().name}</Card.Title>
                            <Button variant="warning" onClick={() => navigate(`/category/${category.data().name}`)}>Ver Catalogo</Button>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )

}



export default Categories