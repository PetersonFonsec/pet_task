import  { Request, Response, NextFunction } from 'express'
import { sign, Secret, SignOptions, verify } from 'jsonwebtoken'

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

    public createToken(payload:String | Object):String {
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

    public login(req:AuthRequest, res:Response){

    }

    public forgetPassword(req:AuthRequest, res:Response){
        
    }
}

export default new Auth()