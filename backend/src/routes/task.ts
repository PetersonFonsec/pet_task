import Task from '../services/task'
import Auth from '../services/auth'
import { Router } from 'express'

const route = Router()

route.get('/task', Task.findAll )

route.post('/task', Task.create )

route.route('/task/:id')
    .all(Auth.validToken)
    .get(Task.findOne)
    .put(Task.update)
    .delete(Task.delete)

export default route