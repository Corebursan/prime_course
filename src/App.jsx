import { useState } from 'react'
import Navbar from './Components/Navbar'
import Abouts from './Components/Abouts'
// import Courses from './Components/Courses'
import Banner from './Components/Banner'
import Notes from './Components/Notes'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
// import CourseList from './Components/CourseList'
import CourseManager from './Components/CourseManager'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      <Banner />
      <Abouts />
      <CourseManager />
      {/* <Courses /> */}
      <Notes />
      <Contact />
      <Footer />
    </>
  )
}

export default App
