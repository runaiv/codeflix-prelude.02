module.exports = function pick(obj, ...keys) 
{
    let newObj = {}
    let arr = []
    for(cle of keys){
        for(const [key, value] of Object.entries(obj)) {
            if(cle == key){
                newObj [value] = key
            }
    }
}
    //newObj.firstname = "arun"
    return newObj
}