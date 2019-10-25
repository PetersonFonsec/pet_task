import Step from '../services/step'
import Auth from '../services/auth'
import { Router } from 'express'

const route = Router()

route.get('/step', Step.findAll )

route.post('/step', Step.create )

route.route('/step/:id')
    .all(Auth.validToken)
    .get(Step.findOne)
    .put(Step.update)
    .delete(Step.delete)

export default route