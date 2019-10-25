import ProjectInterface from './interfaces/project'
import Response from './interfaces/request'
import RequestPattern from './requestPattern'

class Project extends RequestPattern {

    private router: string = '/project'

    public async create(data: ProjectInterface): Promise<Response> {
 
        const { name, description, estimated_time } = data

        if (!name)
            return this.Error('Nome do projeto é um campo obrigátorio')

        if (!description)
            return this.Error('Descrição do projeto é um campo obrigátorio')

        if (!estimated_time)
            return this.Error('Todo projeto deve ter uma estimativa de tempo')

        return await this.Request(this.router, 'post', data  )
    }

    public async findOne(id: string): Promise<Response> {

        if (!id) return this.Error('Projeto não informado')

        return await this.Request(this.router, 'get', id  )

    }

    public async findAll(): Promise<Response> {
        return await this.Request(this.router)
    }
    
    public async update(id: string, data: ProjectInterface): Promise<Response> {
        
        if (!id) return this.Error('Projeto não informado')
        
        if (!data && data === {} ) return this.Error('Nenhum dados foi alterado')

        return await this.Request(`${this.router}/${id}`, 'put', data)

    }
    
    public async delete(id: string): Promise<Response> {

        if (!id) return this.Error('Projeto não informado')
        
        return await this.Request(`${this.router}/${id}`, 'delete')

    }

}

export default new Project()
