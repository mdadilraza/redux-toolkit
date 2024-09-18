import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
    const products =useSelector(state => state.cart)
 const dispatch =useDispatch();

 //Function to remove Item from Cart
    const removeItem =(id) =>{
       //dispatch a remove action
      console.log("Item removed From Cart" + id);
      
       dispatch(remove(id))
    }
    
   const cards= products.map((product) => (
        <div className='col-md-12' key={product.id} style={{ marginBottom: '10px' }}>
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
                        <Button variant="danger" onClick={() => removeItem(product.id)}>Remove Item</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    ))

  return (
     <div className='row'>
        {cards}
     </div>
  )
}

export default Cart