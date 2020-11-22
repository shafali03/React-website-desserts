import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import { productData } from './components/Products/data'
import Feature from './components/Feature/Feature'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your desserts' data={productData} />
      <Feature />
    </Router>
  )
}

export default App
