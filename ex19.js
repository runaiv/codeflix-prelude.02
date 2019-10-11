module.exports = function size (list) 
{
    let len = 0
    isArray = list instanceof Array
    if(isArray){
       return list.length
    }
    else{
        for(const key of  Object.entries(list)) {
            len ++
        }
        return len
    }

}