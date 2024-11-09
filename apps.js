// let make every beginning and end of our triangle start with 1 and end with one
// dont forget that this is an index number ; this means befor every one there is 0
// let our function be called number row 


const pasca = (rowindex) => {
    let result = [[1],[1,1] [1,2,1] [1,3,3,1]]

    // telling us about our next array result
    if(rowindex === 4) {
        return result;
    }
    if (rowindex ===  0) {
        return [];  // undefined
    }
    // next row result
    // we dont know next row yet 
    for (let num = 4; num = rowindex; i++ ){
        let nextrow = result[result.length + 1]
        return nextrow;
    }
}



// another tryout


let pascal =(num) => {
    let result = [[1][1,1][1,2,1]]
    
    if( num === 3) {
        return result;
    }

    for (let i = 3 ; i < num ;i++){
        let last = result
        let nextrow = new Array (last.length + 1)
    } 
   return nextrow;
}