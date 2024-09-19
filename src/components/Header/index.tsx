import React from 'react'
import Subtitle from './Subtitle'

const subtitleText = "Leave a message down below..."

const Header = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold text-pink-600 mb-2 tracking-wide">Guest Book</h1>
      <Subtitle text={subtitleText}/>
    </section>
  )
}

export default Header