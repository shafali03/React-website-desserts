import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import { productData } from './components/Products/data'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your desserts' data={productData} />
    </Router>
  )
}

export default App
