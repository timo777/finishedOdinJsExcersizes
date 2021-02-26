const removeFromArray = function(myList, num) {
    for (let i = 0; i != arguments.length; i++){
        if (i === 0){
            continue            
        }
        const index = myList.indexOf(arguments[i])
        if (index > -1) {
           myList.splice(index, 1)
    }
   }
    
    return myList;
}

module.exports = removeFromArray
