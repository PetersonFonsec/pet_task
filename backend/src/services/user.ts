import userModel from '../models/user'
import { hashSync, genSaltSync } from 'bcryptjs'
import { Response, Request } from 'express'
import Auth from './auth'

class User {

    private async emailExits(email:String):Promise<Boolean> {

        try {

            const exist = await userModel.findOne({ email })

            return !!(exist)

        } catch (error) {

           return false            
        }

    }

    public async create( req:Request, res:Response ){
        
        const { body } = req

        const { email, password, name } = body
        
        if( !name || !email || !password)
            return res.status(401).send({ error: 'Nome, Email e ou Senha não informados' })
            
        try {
            
            const exist = await this.emailExits(email)
                
            if(exist) return res.status(401).send({ error: 'Email já cadastrado' })

            body.password = hashSync(body.password, genSaltSync(10) )

            const user = await userModel.create({ ...body})

            if(!user) return res.status(401).send({ error: 'Usuário não criado' })

            return res.status(200).send({
                result: { ...user },
                token: Auth.createToken(user._id)
            })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    public async findAll( req:Request, res:Response ){
        try{
            
            const result = await userModel.find()

            return res.status(200).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public async findOne( req:Request, res:Response ){

        try{

            const { id } = req.params

            const result = await userModel.findById(id)

            return res.status(200).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public async update( req:Request, res:Response ){
        try{

            const { id } = req.params

            const result = await userModel.findByIdAndUpdate(id, { ...req.body })

            return res.status(200).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public async delete( req:Request, res:Response ){
        try{

            const { id } = req.params

            const result = await userModel.findByIdAndUpdate(id, { ...req.body })

            return res.status(200).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }
}

export default new User()