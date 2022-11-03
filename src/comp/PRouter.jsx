import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import SendPost from './SendPost'


function PRoute() {
  return (
    <Routes>
        <Route exact path='' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<SendPost/>}/>

    </Routes>
  )
}

export default PRoute