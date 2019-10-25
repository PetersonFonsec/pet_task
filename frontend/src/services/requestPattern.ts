import Response from './interfaces/request'
import _axios from '../plugins/axios'

export default class RequestPattern {
    
    // private axios: AxiosMyPattern = _axios

    protected axios: any = _axios

    protected Error(menssage: string): Response {
        return {
            success: false,
            error: menssage
        }
    }

    protected Success(data: any): Response {
        return {
            success: true,
            data
        }
    }

    protected async Request(route: string, method: string= 'get', params: any= {}): Promise<Response> {
        try {
            
            // tslint:disable-next-line: prefer-const
            let object4send: any = {}

            const keys = Object.keys(params)

            keys.forEach( ( key: string ) => object4send[key] = params[key] )
            
            const res = await this.axios[method](route, object4send)
            
            return this.Success(res.data)

        } catch (error) {
            return this.Error(error.response.data.msg)
        }
    }

}
