import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({ children }) => {

    const location = useLocation()

    const isAuth = !!localStorage.getItem('x-token')

    if (!isAuth) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children

}