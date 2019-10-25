import TaskModel from './interfaces/task'
import Response from './interfaces/request'
import RequestPattern from './requestPattern'

class Task extends RequestPattern {

    private router: string = '/task'

    public async create(data: TaskModel): Promise<Response> {
 
        const { name, description, project, estimated_time } = data

        if (!estimated_time)
            return this.Error('Toda tarefa deve ter um termpo determinado')
        
        if (!description)
            return this.Error('Descrição da tarefa é um campo obrigátorio')
        
        if (!project)
            return this.Error('Projeto não informado')
        
        if (!name)
            return this.Error('Nome da tarefa é um campo obrigátorio')

        return await this.Request(this.router, 'post', data  )
    }

    public async findOne(id: string): Promise<Response> {

        if (!id) return this.Error('Tarefa não informada')

        return await this.Request(this.router, 'get', id  )

    }

    public async findAll(): Promise<Response> {
        return await this.Request(this.router)
    }
    
    public async update(id: string, data: TaskModel): Promise<Response> {
        
        if (!id) return this.Error('Tarefa não informada')
        
        if (!data && data === {} ) return this.Error('Nenhum dados foi alterado')

        return await this.Request(`${this.router}/${id}`, 'put', data)

    }
    
    public async delete(id: string): Promise<Response> {

        if (!id) return this.Error('Tarefa não informada')
        
        return await this.Request(`${this.router}/${id}`, 'delete')

    }

}

export default new Task()
