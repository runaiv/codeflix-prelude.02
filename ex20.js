module.exports = function sample (list, n = 1) 
{
    let newArray = []
    
    for(let i = 0; i < n ; i++){
        for(let elem of newArray){
        let random = Math.floor((Math.random() * list.length))
            if (elem != newArray[random])
                newArray.push(list[random])
        }
    }
    return newArray
} 