export default interface Response {
    success: boolean,
    error: string,
    data: { 
        result: any
        token?: string
     },
}
