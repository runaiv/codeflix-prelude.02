    function omit(obj, ...options) {
    const [firstOpts] = options
  
    const newObj = {}
  
    if (typeof firstOpts === 'function') {
      const callback = firstOpts
  
      // with callback
      for (const item of Object.entries(obj)) {
        const [key, value] = item   
        if (callback(value, key) === true) {
          newObj[key] = obj[key]
        }
      }
    } else {
      // with keys
        for(const [item] of Object.entries(obj)){
            for (const key of options) {
                if (item != key) {
                newObj[item] = obj[item]
                }

            }
        }
    }
    return newObj
  }
  
  const user = {
    firstname: 'Majdi',
    lastname: 'Toumi',
    age: 18
  }
  
  console.log(omit(user, 'firstname'))
  console.log(
    omit(user, function(value, key) {
      return Number.isInteger(value)
    })
  )
  
  const arr = [1, 2, 3, 4, 5, 6]
  
  arr.forEach(function (item) {
    console.log(item)
  })
  