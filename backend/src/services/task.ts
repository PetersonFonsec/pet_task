import TaskModel from '../models/task'
import { Response, Request } from 'express'
import { Stats } from './project'

class Task {

    public async findOne(req:Request, res:Response){

        const { id } = req.params
        
        if( !id ) 
            return res.status(401).send({ error: 'Id não informado'})

        try {

            const result = await TaskModel.findById(id)

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }   
    }

    public async findAll(req:Request, res:Response){

        try {

            const result = await TaskModel.find({})

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }

    }

    public async create(req:Request, res:Response){
        
        const { name, description, estimated_time, responsible } = req.body
        
        if(!name)
            return res.status(401).send({ error: 'Nome da tarefa não enviado'})
        
        if(!description)
            return res.status(401).send({ error: 'Descrição da tarefa não enviado'})

        if(!estimated_time)
            return res.status(401).send({ error: 'Tempo estimado da tarefa não enviado'})
            
        try {

            let { id, state } = req.body

            if(state) delete req.body.state

            if(!responsible) req.body.responsible = [id]

            const result = await TaskModel.create({ 
                ...req.body,
                state: Stats.NI
            })

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    public async update(req:Request, res:Response){
        try {

            const { id } = req.body

            const result = await TaskModel.findByIdAndUpdate(id, { ...req.body })

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    public async delete(req:Request, res:Response){
        try {

            const { id } = req.params

            const result = await TaskModel.findByIdAndDelete(id)

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }
        
}

export default new Task()