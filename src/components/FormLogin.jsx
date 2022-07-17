import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Error } from './Error'

import { logearUsuario } from '../services/usuario-service'

export const FormLogin = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(false)

    const iniciarSesion = async (e) => {

        e.preventDefault()

        const response = await logearUsuario({ email, password })

        if (response !== 200) {
            setStatus(true)
            setEmail('')
            setPassword('')
        } else {
            setStatus(false)
            navigate('/main')
        }


    }

    return (
        <>

            {(status) && <Error />}
            <form onSubmit={iniciarSesion}>


                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Email</label>
                    <input
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        type="email"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Password</label>
                    <input
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        type="password"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button
                    type='submit'
                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Go
                </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.
                <button
                    onClick={() => navigate('/registrar')}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Registrar</button>
            </p>
        </>
    )
}
