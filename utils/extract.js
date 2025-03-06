export function extractQueryParams(query){
    return query.substr(1).split('&').reduce((queryParams, params)=>{
        const [key, value] = param.split('=')

        queryParams[key] = value

        return queryParams
    }, {})
}