import User from '../services/user'
import Auth from '../services/auth'
import { Router } from 'express'

const route = Router()

route.get('/user', User.findAll )

route.post('/user', User.create )

route.route('/user/:id')
    .all(Auth.validToken)
    .get(User.findOne)
    .put(User.update)
    .delete(User.delete)

export default route