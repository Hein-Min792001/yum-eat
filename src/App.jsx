import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './components/TopNav'
import Featured from './components/Featured'
import { Delivery } from './components/Delivery'
import { Topicks } from './components/Topicks'
import { Meal } from './components/Meal'
import NewsLetter from './components/NewsLetter'
import Categories from './components/Categories'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
     <TopNav/>
     <Featured/>
     <Delivery/>
     <Topicks/>
     <Meal/>
     <Categories/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default App
