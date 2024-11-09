import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const mouseOver = ()=>{
    if(document.getElementById('mainhome51')){
      document.getElementById('mainhome51').style.visibility = 'visible'
    }
  }
  const mouseOut = ()=>{
    if(document.getElementById('mainhome51')){
      document.getElementById('mainhome51').style.visibility = 'hidden'
    }
  }
  const mouseOver1 = ()=>{
    if(document.getElementById('mainhome52')){
      document.getElementById('mainhome52').style.visibility = 'visible'
    }
  }
  const mouseOut1 = ()=>{
    if(document.getElementById('mainhome52')){
      document.getElementById('mainhome52').style.visibility = 'hidden'
    }
  }
  const scrollToFooter = ()=>{
    if(document.getElementById('footer')){
      const element = document.getElementById('footer')
      element?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
  const scrollToService = ()=>{
    setTimeout(()=>{
      if(document.getElementById('mainhome3')){
        const element = document.getElementById('mainhome3')
        element?.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },0.1)
  }
  const scrollToStats = ()=>{
    setTimeout(()=>{
      if(document.getElementById('mainhome4')){
        const element = document.getElementById('mainhome4')
        element?.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },0.1)
  }
  const scrollToMessage = ()=>{
    setTimeout(()=>{
      if(document.getElementById('about2')){
        const element = document.getElementById('about2')
        element?.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },0.1)
  }
  const scrollToTest = ()=>{
    setTimeout(()=>{
      if(document.getElementById('about3')){
        const element = document.getElementById('about3')
        element?.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },0.1)
  }
  const scrollToGallery = ()=>{
    setTimeout(()=>{
      if(document.getElementById('about5')){
        const element = document.getElementById('about5')
        element?.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },0.1)
  }
  return (
    <div className='mainheader'>
    <div className='header'>
      <div className='header1'>
        <div className='header11'><img src='https://d33wubrfki0l68.cloudfront.net/41c302740f28038d1d4dd884e172791eeb805b0c/9f3a5/assets/logo.png' alt=''/></div>
        <div className='header12'>
            <div className='header121' onMouseOver={mouseOver} onMouseOut={mouseOut}><Link to="/" style={{color:'gray'}}>HOME</Link></div>
            <div className='header121' onMouseOver={mouseOver1} onMouseOut={mouseOut1}><Link to="/about" style={{color:'gray'}}>ABOUT</Link></div>
            <div className='header121'><Link to="/careers" style={{color:'gray'}}>CAREERS</Link></div>
            <div className='header121' onClick={scrollToFooter}>CONTACT</div>
        </div>
      </div>
    </div>
      <div className='mainhome5'>
        <div className='mainhome51' id='mainhome51' onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <div className='mainhome511' onClick={scrollToService}><Link to="/" style={{color:'rgb(164, 162, 162)'}}>SERVICES</Link></div>
          <div className='mainhome511' onClick={scrollToStats}><Link to="/" style={{color:'rgb(164, 162, 162)'}}>STATISTICS</Link></div>
        </div>
        <div className='mainhome52' id='mainhome52' onMouseOver={mouseOver1} onMouseOut={mouseOut1}>
          <div className='mainhome521' onClick={scrollToMessage}><Link to="/about" style={{color:'rgb(164, 162, 162)'}}>OUR MESSAGE</Link></div>
          <div className='mainhome521' onClick={scrollToTest}><Link to="/about" style={{color:'rgb(164, 162, 162)'}}>TESTIMONIALS</Link></div>
          <div className='mainhome521' onClick={scrollToGallery}><Link to="/about" style={{color:'rgb(164, 162, 162)'}}>GALLERY</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Header
