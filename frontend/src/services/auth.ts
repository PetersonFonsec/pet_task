import Response from './interfaces/request'
import RequestPattern from './requestPattern'

class Project extends RequestPattern {

    public async login(password: string, email: string): Promise<Response>{
        
        if ( !email ) return this.Error('Email não informado')

        if ( !password ) return this.Error('password não informado')
        
        return this.Request('/login', 'post', { email, password })
    }

    public async forgetPassword(): Promise<Response>{
        return this.Request('/forgetPassword')
    }

}

export default new Project()
