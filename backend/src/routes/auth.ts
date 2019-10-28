import Auth from '../services/auth'
import { Router, Response, Request } from 'express'

const route = Router()

route.post('/login', Auth.login )

route.post('/validToken', Auth.validToken, 
    ( req:Request, res:Response ) => res.status(200).send() )

route.get('/forgetPassword', Auth.forgetPassword )

export default route