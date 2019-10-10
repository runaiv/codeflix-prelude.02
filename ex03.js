module.exports = function last (array, n = 1){
    return array.splice(array.length - n, array.length)
}