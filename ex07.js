module.exports = function union (...array){
    let tab = []
    for (let count = 0; count != array.length; count++){
        tab[count] += array[count].concat(array[count+1])
    }
    return tab
}