import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className="home">
    <h1 className='text-center'>Hello World!</h1>
    <i className="icon icon-aixin"></i>
    <img alt='This is a duck, because Redux!' className='duck' src={ DuckImage }/>
  </div>
)

export default HomeView
