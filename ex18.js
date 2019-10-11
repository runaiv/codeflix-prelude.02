module.exports = function has (obj, key) 
{
    for(const [cle] of Object.entries(obj)){
        if(cle == key)
            return true
        else
            return false
    }
}