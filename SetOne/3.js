function twoSum(nums, target) {
    let indices = {};

    for (let i = 0; i < nums.length ; i++){
        let num = nums[i];
        
        let done = target - num;

        if (done in indices){
            return [indices[done], i];
        }
        indices[num] = i;

    }
    return [];
}