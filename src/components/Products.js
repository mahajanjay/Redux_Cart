//import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';

function Products() {
    
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    //const [products, setProducts] = useState([]);
    // const getProductsData = async() => {
    //     const res = await axios.get('https://fakestoreapi.com/products')
    //     //console.log(res.data)
    //     setProducts(res.data)
    // }

    useEffect(() => {
      dispatch(fetchProducts());
        //getProductsData();
    }, [dispatch])

    const handleAdd = (product) => {
      dispatch(add(product));
    }

    if(status === STATUSES.LOADING) {
      return <h2>Loading...</h2>
    }

    if(status === STATUSES.ERROR) {
      return <h2>Something went wrong!</h2>
    }

  return (
    <div className='productsWrapper'>
      {
        products.map((product) => {
            return (
            <div className='card' key={product.id}>
                <img src={product.image} alt=''></img>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={() => handleAdd(product)} className='btn'>Add to Cart</button>
            </div>)
            
        })
      }
    </div>
  )
}

export default Products
