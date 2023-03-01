import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

function Cart() {

  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  }

  return (
    <div>
      <h5>Cart</h5>

      <div className='productsWrapper'>
        {
          products.map((product) => {
            return (
              <div className='card' key={product.id}>
                <img src={product.image} alt='' />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button className='btn' onClick={() => handleRemove(product.id)}>Remove</button>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Cart;
