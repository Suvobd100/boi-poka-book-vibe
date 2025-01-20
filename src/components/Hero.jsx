import React from 'react'
import img from '../assets/img/books.jpg'

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={img}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br></br>
        your bookshelf</h1>
      
      <button className="btn btn-primary mt-5">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero