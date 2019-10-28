import Response from './interfaces/request'
import { userToken } from '@/global'
import RequestPattern from './requestPattern'

class Project extends RequestPattern {
    
    private router: string = '/login'

    public async login(password: string, email: string): Promise<Response> {
        
        if ( !email ) return this.Error('Email não informado')

        if ( !password ) return this.Error('password não informado')
        
        return await this.Request(this.router, 'post', { email, password })
    }

    public async validToken(): Promise<Response> {

        const token = localStorage.getItem(userToken)

        if ( !token ) return this.Error('Usuário não altenticado')

        return await this.Request('/validToken', 'post', {  authorization: token })

    }

    public async forgetPassword(): Promise<Response> {

        return this.Request('/forgetPassword')

    }

}

export default new Project()
