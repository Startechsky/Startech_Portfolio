import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Projectlist from './components/Projectlist.jsx'
import Services from './components/Services.jsx'
import Head2 from './components/Head2.jsx'
import Small from './components/small.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'
import { HashRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='sm:px-20 sm:py-10 p-10'>
      <Header/>
      <Head2/>
      <div className="sm:hidden mt-15">
        <Small/>
      </div>
      <div className="sm:mt-32 mt-5">
        <Hero/>
      </div>
      <div className="mt-25">
        <Projects Title='My Projects' subTitle='Below are the projects i have successfully completed.'/>
      </div>
      <div className="mt-10">
        <Projectlist/>
      </div>
      <div className="sm:mt-40 mt-20">
        <Services/>
      </div>
      <div className="mt-40">
        <Form Title='Reach Out'/>
      </div>
      <div className='mt-10'>
        <Footer/>
      </div>
    </div>
  </StrictMode>,
)
