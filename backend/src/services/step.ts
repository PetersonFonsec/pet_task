import StepModel from '../models/step'
import { Response, Request } from 'express'
import { Stats } from './project'

class Step {

    public async findOne(req:Request, res:Response){

        const { id } = req.params
        
        if( !id ) 
            return res.status(401).send({ error: 'Id não informado'})

        try {

            const result = await StepModel.findById(id)

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }   
    }

    public async findAll(req:Request, res:Response){

        try {

            const result = await StepModel.find({})

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }

    }

    public async create(req:Request, res:Response){
        
        const { name, task, state, description } = req.body
        
        if(!name)
            return res.status(401).send({ error: 'Nome do passo não enviado'})

        if(!task)
            return res.status(401).send({ error: 'Tarefa do passo não enviado'})
        
        if(!description)
            return res.status(401).send({ error: 'Descrição do passo não enviado'})
            
        if(state) delete req.body.state

        try {

            const result = await StepModel.create({ 
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

            const result = await StepModel.findByIdAndUpdate(id, { ...req.body })

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    public async delete(req:Request, res:Response){
        try {

            const { id } = req.params

            const result = await StepModel.findByIdAndDelete(id)

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }
        
}

export default new Step()