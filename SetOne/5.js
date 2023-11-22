function sortArray(arr){
    let result = {
        evens : [],
        odds : [],
        chars : [],
    };

    function addSorted(array, num){
        for (let i = array.length-1; i >=0; i--){
            if (array[i]>num){
                array[i + 1] = array[i];
            }
            
            else {
                array[i + 1] = num
                return array;
            }
        } 
        array[0] = num;
        return array;
    }

    for (let element of arr){
        if(typeof element === "number"){
            if(Number.isInteger(element)){
                if(element % 2 === 0){
                    addSorted(result.evens, element);
                }else{
                    addSorted(result.odds, element);
                }
            }
        }else if (typeof element === "string"){
            if(element.length === 1){
                addSorted(result.chars, element);
            }
        }
    }
    return result;
}