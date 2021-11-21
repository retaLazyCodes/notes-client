import React, { useState } from 'react'
import authService from '../services/auth'
import notesService from '../services/notes'
import Togglable from './Togglable'
import PropTypes from 'prop-types'

const Login = ({ setError, setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with', username, password)

        try {
            const user = await authService.login({
                username,
                password
            })

            if (user) {
                notesService.setToken(user.token)
                setUser(user)
            }
        } catch (e) {
            setError("Wrong credentials")
            setTimeout(() => {
                setError(null)
            }, 5000)
        }
    }

    return (

        <Togglable buttonLabel='show login'>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input
                        type="text"
                        value={username}
                        name="Username"
                        placeholder="Username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        placeholder="*******"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </Togglable>

    )
}

Login.propTypes = {
    setError: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}

export default Login