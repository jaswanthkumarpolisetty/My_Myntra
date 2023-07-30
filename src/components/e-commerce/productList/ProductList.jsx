import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct } from '../../../redux/slices/productSlice';
import SingleProduct from '../singleproduct/SingleProduct';
import './ProductList.css'

function ProductList() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch(loadProduct(data));
  }

  return (
    <div className='ProductList'>
      {products.map((item) => (
        <div key={item.id}>
          <SingleProduct product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;



