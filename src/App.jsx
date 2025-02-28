import { useState } from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/navbar2'
import Herosection from './components/Herosection'
import Herosection2 from './components/Herosection2'
import Typewriter from './components/changingtext'
import Aboutus from './components/Aboutus'
import Scrolltext from './components/Scrolltext'
import Cards from './components/Cards'
import WhatWeDo from './components/Whatwedo'
import Incubatedstartup from './components/Incubatedstartup'
import Startups from './components/Satrutups'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className='bg-gray-100'>
      <Navbar/>
       <Herosection/>
       <Aboutus/>
       <Scrolltext/>
       <WhatWeDo/>
       <Cards/>
       <Incubatedstartup/>
       <Startups/>
       <Footer/>
      
    </div>
  )
}

export default App
