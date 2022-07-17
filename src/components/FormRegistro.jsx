import React, { useState } from 'react'
import { registrarUsuario } from '../services/usuario-service'

import { useNavigate } from 'react-router-dom'
export const FormRegistro = () => {

  const navigate = useNavigate()

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const agregarUsuario = (e) => {

    e.preventDefault()

    registrarUsuario({ nombre, email, password, role: 'ADMIN_ROLE' })

    setNombre('')
    setEmail('')
    setPassword('')

    navigate('/login')

  }


  return (
    <>
      <button
        onClick={() => navigate('/login')}
        style={{ marginTop: 20, marginLeft: 20 }}
        className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Ir a login</button>
      <section className="text-gray-600 body-font relative">
        <form onSubmit={agregarUsuario}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Registrar usuario</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Agrega algo aqui ps uwu</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={({ target }) => setNombre(target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type={'submit'}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Agregar</button>
                </div>

              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}
