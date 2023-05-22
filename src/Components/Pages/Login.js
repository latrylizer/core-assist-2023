import React, { useState, useRef, useEffect } from 'react'
import { UseAuth } from '../Auth/Auth_context'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const { Login, currentUser } = UseAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      var result = await Login(
        emailRef.current.value,
        passwordRef.current.value
      )
      navigate('/dashboard')

      setLoading(false)
    } catch {
      setLoading(false)
      setError('Login Failed')
    }
  }
  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard')
    }
  }, [currentUser])
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <header className="display-4 text-center mt-5 mb-5">Login</header>
          <div className="container d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        ref={emailRef}
                        className="form-control"
                        id="tbUsername"
                        placeholder="email@example.com"
                      />
                      <div className="invalid-feedback">Incorrect fields</div>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        ref={passwordRef}
                        className="form-control"
                        id="tbPassword"
                        placeholder="Password"
                      />
                      <div className="invalid-feedback">Incorrect fields</div>
                    </div>
                    <button
                      type="submit"
                      id="btnSignIn"
                      className="btn btn-danger"
                      disabled={loading}
                    >
                      Sign in
                    </button>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
