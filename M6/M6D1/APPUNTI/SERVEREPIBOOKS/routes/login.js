const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Users = require('../models/users')
const jwt = require('jsonwebtoken')

// Middleware function for verifying JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token)
        return res.status(401).send('Accesso non autorizzato. Token mancante.')

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).send('Token non valido o scaduto.')
    }
}

// Login route
router.post('/login', async (req, res) => {
    const user = await Users.findOne({ name: req.body.name })
    if (!user)
        return res.status(400).send('Nome utente errato o non esistente.')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Password non valida')

    // Generate JWT token
    const token = jwt.sign({ name: user.name, role: user.role }, process.env.TOKEN_SECRET, {
        expiresIn: '15m',
    })

    // Return user details and token
    res.header('auth-token', token).status(200).send({
        name: user.name,
        role: user.role,
        token: token,
    })
})

// Refresh token route
router.post('/refresh-token', verifyToken, async (req, res) => {
    const user = await Users.findOne({ name: req.user.name })
    if (!user)
        return res.status(400).send('Utente non trovato.')

    const token = jwt.sign({ name: user.name, role: user.role }, process.env.TOKEN_SECRET, {
        expiresIn: '15m',
    })

    // Return new token
    res.header('auth-token', token).status(200).send({
        token: token,
    })
})

module.exports = router



// in frontend

import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            try {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/refresh-token`, {}, {
                    headers: { 'auth-token': localStorage.getItem('token') },
                })

                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token)
                    return api.request(originalRequest)
                }
            } catch (error) {
                console.log(error)
            }
        }

        return Promise.reject(error)
    }
)

export default api