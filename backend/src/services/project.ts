import ProjectModel from '../models/project'
import { Response, Request } from 'express'

export enum Stats {
    T  = 'Terminado',
    EP = 'Em Processo',
    NI = 'Não Iniciado',
}

class Project {

    public async findOne(req:Request, res:Response){
        const { id } = req.params
        
        if( !id ) 
            return res.status(401).send({ error: 'Id não informado'})

        try {

            const result = await ProjectModel.findById(id)

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }   
    }

    public async findAll(req:Request, res:Response){

        try {

            const result = await ProjectModel.find({})

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }

    }

    public async create(req:Request, res:Response){
        
        const { name, description, estimated_time } = req.body
        
        if(!name)
            return res.status(401).send({ error: 'Nome do projeto não enviado'})
        
        if(!description)
            return res.status(401).send({ error: 'Descrição do projeto não enviado'})

        if(!estimated_time)
            return res.status(401).send({ error: 'Tempo estimado do projeto não enviado'})

        try {

            let { members, id, state } = req.body

            if(state) delete req.body.state

            members && members[0]
                ? req.body.members.push(id)
                : req.body.members = [id]

            const result = await ProjectModel.create({ 
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

            const result = await ProjectModel.findByIdAndUpdate(id, { ...req.body })

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    public async delete(req:Request, res:Response){
        try {

            const { id } = req.params

            const result = await ProjectModel.findByIdAndDelete(id)

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }
    
}

export default new Project()