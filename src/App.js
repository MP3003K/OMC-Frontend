import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { RequireAuth } from './auth/RequireAuth'
import { UnAuthenticate } from './auth/UnAuthenticate'

import { 
  Main,
  Login,
  NotFound,
  ListaUsuarios,
  RegistrarUsuario
} from './pages'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Navigate to='/login' />} />

        <Route 
          path='/main' 
          element={ 
            <RequireAuth> 
              <Main /> 
            </RequireAuth> 
          } >
          <Route index element={ <ListaUsuarios />} />
        </Route>

        <Route 
          path='/login' 
          element={
            <UnAuthenticate> 
              <Login /> 
            </UnAuthenticate>
          } />
        <Route path='/registrar' element={ <RegistrarUsuario /> } />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
