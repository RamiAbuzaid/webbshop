import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import "./../src/App.css"


export default function App(){
  return(
    <div className='container'>
    <Header />
    <Products />
    <Footer />
    </div>
  ) 
}
 
