import * as express from "express";
import * as Cors from 'cors'
import * as Helmet from 'helmet'
import { json, urlencoded } from 'body-parser'

import projectRoute from '../routes/project'
import taskRoute from '../routes/task'
import stepRoute from '../routes/step'
import userRoute from '../routes/user'
import authRoute from '../routes/auth'

class Server {

    public express: express.Application

    constructor(){
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.express.use(urlencoded({ extended: true }))
        this.express.use(Helmet())
        this.express.use(Cors())
        this.express.use(json())
    }

    routes(){
        this.express.use(projectRoute)
        this.express.use(taskRoute)
        this.express.use(stepRoute)
        this.express.use(authRoute)
        this.express.use(userRoute)
    }
}

export default new Server().express