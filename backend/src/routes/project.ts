import Project from '../services/project'
import Auth from '../services/auth'
import { Router } from 'express'

const route = Router()

route.get('/project', Project.findAll )

route.post('/project', Project.create )

route.route('/project/:id')
    .all(Auth.validToken)
    .get(Project.findOne)
    .put(Project.update)
    .delete(Project.delete)

export default route