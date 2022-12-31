import React from 'react'
import { LadingView } from './views/LadingView'
import { Proyectos } from './views/Proyectos'
import { SobreMi } from './views/SobreMi'

export const Portafolio = () => {
  return (
    <>
      <LadingView/>
      <SobreMi />
      <Proyectos />
    </>
  )
}
