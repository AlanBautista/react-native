import React from 'react'

export default function Funciones() {

    const sumar = (a:number,b:number):number =>{
        return a+b;
    }


  return (
    <>
        <h3>Funciones</h3>
        El resultado es: {sumar(10,5)}
    </>
  )
}
