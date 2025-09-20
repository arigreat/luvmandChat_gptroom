export interface apiInitOptionalElement{
    apiKey:string,
    baseURL:string,
    model:string, //
    stream?:boolean, // if streaming is enabled
    useDefault?:boolean, // if default API should be used
    timeout?:number, // to set a timeout for requests
}