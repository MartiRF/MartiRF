import React from 'react'
import { ProyectoItem } from '../components/ProyectoItem'
import './Proyectos.css'
export const Proyectos = () => {
  return (
    <section className='projects__container'>
      <h1>Projectos</h1>
      <div>
        <ProyectoItem />
      </div>
    </section>
  )
}
