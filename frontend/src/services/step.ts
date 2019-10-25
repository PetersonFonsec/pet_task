import StepModel from './interfaces/step'
import Response from './interfaces/request'
import RequestPattern from './requestPattern'

class Step extends RequestPattern {

    private router: string = '/task'

    public async create(data: StepModel): Promise<Response> {
 
        const { name, description, task } = data
        
        if (!task)
            return this.Error('Projeto não informado')
            
        if (!name)
            return this.Error('Nome da tarefa é um campo obrigátorio')

        if (!description)
            return this.Error('Descrição da tarefa é um campo obrigátorio')
            
        return await this.Request(this.router, 'post', data  )
    }

    public async findOne(id: string): Promise<Response> {

        if (!id) return this.Error('Passo não informado')

        return await this.Request(this.router, 'get', id  )

    }

    public async findAll(): Promise<Response> {
        return await this.Request(this.router)
    }
    
    public async update(id: string, data: StepModel): Promise<Response> {
        
        if (!id) return this.Error('Passo não informado')
        
        if (!data && data === {} ) return this.Error('Nenhum dados foi alterado')

        return await this.Request(`${this.router}/${id}`, 'put', data)

    }
    
    public async delete(id: string): Promise<Response> {

        if (!id) return this.Error('Passo não informado')
        
        return await this.Request(`${this.router}/${id}`, 'delete')

    }

}

export default new Step()
