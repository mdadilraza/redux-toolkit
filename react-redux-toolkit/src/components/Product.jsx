import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(result => setProducts(result))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (product) => {
        console.log('Adding to cart:', product);
        dispatch(add(product));
    };

    return (
        <>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {products.map((product) => (
                    <div className='col-md-3' key={product.id} style={{ marginBottom: '10px' }}>
                        <Card style={{ width: '18rem' }}>
                            <div className='text-center'>
                                <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '120px' }} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        INR.{product.price}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: 'white' }}>
                                    <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Product;
