import React from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2' 
import CreateNotes from './components/notes/CreateNotes'
import ListNote from './components/notes/ListNote'
import NavBar from './components/e-commerce/navbar/NavBar'
import ProductList from './components/e-commerce/productList/ProductList'
import './App.css'
import SingleProduct from './components/e-commerce/singleproduct/SingleProduct'
function App() {
  return (
    <div className='App'>
      {/* <Child1/>
      <Child2/> */}
      {/* <CreateNotes/>
      <ListNote/> */}
      <NavBar/>
      <ProductList/> 
    
    </div>
  )
}

export default App
