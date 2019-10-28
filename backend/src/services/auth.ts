import { Request, Response, NextFunction } from 'express'
import { sign, Secret, SignOptions, verify } from 'jsonwebtoken'
import { compareSync } from 'bcryptjs'
import User_Schema, { User_Model } from '../models/user'

interface User_Logged extends User_Model {
    result: User_Model
    token: string
}

interface AuthRequest extends Request {
    userId: String
    headers: {
        authorization: string;
    }
}

interface IdUser {
    _id: String
}

class Auth {

    private expiresToken:SignOptions = { 
        expiresIn: 10800000  // 3 hours
    }

    private secret:Secret = process.env.AUTH_SECRET
    
    constructor(){}

    public createToken(payload:string | object):string {
        return sign(payload, this.secret, this.expiresToken)
    }

    public validToken(req:AuthRequest, res:Response, next:NextFunction){
        const { authorization } = req.headers

        if( !authorization ) 
            return res.status(401).send({ error: 'Token não enviado' })
        
        const part = authorization.split(' ')
        
        if(part.length !== 2 ) 
            return res.status(401).send({ error: 'Token inválido' })

        try{
            const [ Bearer, Token ] = part

            if( 'Bearer' !== Bearer.trim() ) 
                return res.status(401).send({ error: 'Token inválido' })

            verify(Token, this.secret, (error:Error, decoded:IdUser ) => {
                
                if(error) return res.status(401).send({ error })

                req.userId = decoded._id
                
                next()
            })

        }catch(error){
            if(error) return res.status(401).send({ error })
        }
    }

    public async login(req:AuthRequest, res:Response):Promise<Response>{
        
        const { password, email } = req.body

        if( !password ) return res.status(401).send({ error: 'Senha não informada' })

        if( !email ) return res.status(401).send({ error: 'Email não informado' })

        try {

            const userExist = await User_Schema.findOne({ email }).select('+password')

            if( !userExist ) 
                return res.status(401).send({ error: 'Usuário não encontrado' })

            const passwordValid = compareSync( password, `${userExist.password}` )

            if( !passwordValid )
                return res.status(401).send({ error: 'Senha invalida' })
            
            const { _id } = userExist

            const token = this.createToken(_id)

            delete userExist.password

            return res.status(401).send({ 
                token,
                result: { 
                    ...userExist
                }
            })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    public forgetPassword(req:AuthRequest, res:Response){
        
    }

}

export default new Auth()