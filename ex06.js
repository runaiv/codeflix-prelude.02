module.exports = function without (array, ...value){
    for(let i = 0; i != value.length; i ++){
        for(let j = 0; j != array.length; j ++){
            if (value [i] == array [j]){
                array.splice(j, 1)
            }
        }
    }
    return array
}