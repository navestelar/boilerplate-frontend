import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/home'
import Error from './pages/Error'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}