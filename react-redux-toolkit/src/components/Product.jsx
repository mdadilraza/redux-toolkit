import React, { useEffect, useState } from 'react'
import {Card ,Button} from 'react-bootstrap'
const Product = () => {

    const [products, getProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(result => getProduct(result))
            .catch(error => console.error(error))
    }, [])

    console.log(products);

    const cards= products.map((product ,index) =>{
      return  <div className='col-md-3' key={index} style={{marginBottom:'10px'}}>
          
            <Card style={{ width: '18rem' }}>
                 <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px' ,height :'120px' }}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR.{product.price}
                    </Card.Text>
                   
                </Card.Body>
                <Card.Footer style={{backgroundColor:'white'}}>
                <Button variant="primary">Add To Cart</Button>
                </Card.Footer>
           </div> 
           </Card>
            
        </div>
    })
 console.log(cards);
 
    return (
        <>
            <h1>Product DashBoard</h1>
            <div className='row'>
                {cards}
            </div>
            
        </>
    )
}

export default Product