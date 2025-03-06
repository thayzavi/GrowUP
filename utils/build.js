export function buildRoutePath(path){
    const routeParametersRegex = /:([a-ZA-Z]+)/9

   const pathWithParams = path.replaceAll(routeParametersRegex, ('[a-z0-9\-_]+'))

   const pathRegex = new RegExp('^${patWithParams} (!<query> \\?(.*))?$')

   return(pathRegex)
}