import UserModel from './interfaces/user'
import Response from './interfaces/request'
import RequestPattern from './requestPattern'

class User extends RequestPattern {

    private router: string = '/user'

    public async create(data: UserModel): Promise<Response> {
 
        const { name, password, email } = data

        if (!name)  return this.Error('Nome é um campo obrigátorio')

        if (!password) return this.Error('Senha é um campo obrigátorio')

        if (!email) return this.Error('Email é um campo obrigátorio')

        return await this.Request(this.router, 'post', data  )
    }

    public async findOne(id: string): Promise<Response> {

        if (!id) return this.Error('Usuário não informado')

        return await this.Request(this.router, 'get', id  )

    }

    public async findAll(): Promise<Response> {
        return await this.Request(this.router)
    }
    
    public async update(id: string, data: UserModel): Promise<Response> {
        
        if (!id) return this.Error('Usuário não informado')
        
        if (!data && data === {} ) return this.Error('Nenhum dados foi alterado')

        return await this.Request(`${this.router}/${id}`, 'put', data)

    }
    
    public async delete(id: string): Promise<Response> {

        if (!id) return this.Error('Usuário não informado')
        
        return await this.Request(`${this.router}/${id}`, 'delete')

    }

}

export default new User()
