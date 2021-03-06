import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, ListGroupItem, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating"
import axios from 'axios';

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [match])

    return (
        <>
            <Link className="btn btn-light my-3" to="/" > Go back
            </Link>
            <Row>
                <Col md={6}>
                    <Image fluid src={product.image} alt={product.name} />
                </Col>
                <Col md={3} >
                    <ListGroup variant="flush" >
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}>
                            </Rating>
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description : {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        price:
                                    </Col>
                                    <Col>
                                        <strong>
                                            ${product.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        status
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
