function singleNumber(nums) {
    let result = {};

    for(let num of nums) {
        if (result[num]) {
            result[num] ++;
        } else {
            result[num] = 1;
        }
    }

    for(let num of nums) {
        if (result[num] === 1) {
            return num;
        }
    }
    return -1;
}


console.log(singleNumber([3, 1, 2, 1,2]));
