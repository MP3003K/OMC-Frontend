import React from 'react'
import { Tabla } from '../components/Tabla'

export const ListaUsuarios = () => {
  return (
    <>
      <div className='flex flex-col text-center w-full mb-12'>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lista de usuarios</h1>
      </div>
      <div style={{ marginRight: 80, marginLeft: 80 }}>
        <Tabla />
      </div>
    </>
  )
}
