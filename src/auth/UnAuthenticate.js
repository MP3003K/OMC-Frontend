import { Navigate, useLocation } from 'react-router-dom'

export const UnAuthenticate = ({ children }) => {

    const location = useLocation()

    const isAuth = !!localStorage.getItem('x-token')

    if (isAuth) {
        return <Navigate to='/main' state={{ from: location }} replace />
    }

    return children
    
}