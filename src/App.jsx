import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Projects from './Components/projects/Projects'
import More from './Components/More/More'
import Footer from './Components/footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar/>
      <Intro/>
       <About/>
       <Projects/>
       <More></More>
       <Footer></Footer>
    </>
  )
}

export default App
