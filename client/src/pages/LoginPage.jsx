import {useContext, useState} from 'react'
// import { UserContext } from "../context/UserContext";
// import { AuthContext } from "../context/AuthContext";
import {useHistory} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import './Login.css'

const fetchQuery = async ({uri, method = 'GET', body = null}) => {
  const response = await fetch(uri, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body !== null ? JSON.stringify(body) : null,
  })
  const data = await response.json()
  return data
}

const LoginPage = () => {
  return (
    <div className="w-full h-screen bg-green-700">
      parent
      <div className="w-1/4 bg-blue-500 h-2/4">login</div>
    </div>
  )
}
export default LoginPage
