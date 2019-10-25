import Auth from '../services/auth'
import { Router } from 'express'

const route = Router()

route.get('/login', Auth.login )

route.get('/forgetPassword', Auth.forgetPassword )

export default route