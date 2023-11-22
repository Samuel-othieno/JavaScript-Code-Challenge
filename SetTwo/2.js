function trueOrFalse(nums){
    let frequency = {};

    for (let num of num){
        if (frequency[num]){
            return true;
        }
        else{
            frequency[num] = 1;
        }
    }
    return false;
}