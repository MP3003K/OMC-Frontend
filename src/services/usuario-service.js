import { api } from '../config/axios-config'


const logearUsuario = async (usuario) => {
    
    const response  = await api.post('/auth/login', usuario)

    if (response.status === 200) {
        localStorage.setItem('x-token', response.data.token)
    }

    return response.status

}

const registrarUsuario = async (usuario) => {

    const response = await api.post('/usuarios', usuario)
    
    console.log({response})

}

const obtenerUsuarios = async () => {

    const response = await api.get('/usuarios', {
        headers: {
            'x-token': localStorage.getItem('x-token')
        }
    })

    return response.data.usuarios

}

export {
    logearUsuario,
    registrarUsuario,
    obtenerUsuarios
}
