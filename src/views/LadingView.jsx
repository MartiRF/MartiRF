import React from 'react'
import { BackgroungParticulas } from '../components/BackgroungParticulas'
import './LadingfViewStyler.css'
export const LadingView = () => {
  return (
    <section className='lading__main'>
      <div className='lading__container'>
        <h1>Marti Dev</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur dolorum est aut.</p>
      </div>
        <BackgroungParticulas />
    </section>
  )
}
