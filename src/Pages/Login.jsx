import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <p className="text-2xl font-semibold text-gray-900 text-center">
          {state === "sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-gray-600 text-center mt-2">
          Please {state === "sign Up" ? "sign up" : "login"} to book an appointment
        </p>

        {
          state === "sign Up" && <div className="mt-6">
            <p className="text-gray-700 font-medium">Full Name</p>
            <input
              type="text"
              onChange={() => setName(email.target.name)}
              value={name}
              required
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        }



        <div className="mt-4">
          <p className="text-gray-700 font-medium">Email</p>
          <input
            type="email"
            onChange={() => setName(email.target.name)}
            value={name}
            required
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <p className="text-gray-700 font-medium">Password</p>
          <input
            type="password"
            onChange={() => setName(email.target.name)}
            value={name}
            required
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          {state === "sign Up" ? "Create Account" : "Login"}
        </button>
        {
          state === "sign Up"
            ? <p>Already have an account ? <span onClick={() => setState('Login')} className='text-blue-600 underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account? <span onClick={() => setState('sign Up')} className='text-blue-600 underline cursor-pointer'>click here</span></p>
        }

      </div>
    </form>

  )
}

export default Login