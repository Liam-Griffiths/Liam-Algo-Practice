function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for(let x = 0; x < nums.length; x++){
            if(i !== x){
                const checkVal = nums[x] + nums[i];
                if(checkVal === target){
                    return [i, x];
                }
            }
        }
    }

    return [0];
};

/*

Success
Details
Runtime: 234 ms, faster than 17.45% of TypeScript online submissions for Two Sum.
Memory Usage: 44.8 MB, less than 66.41% of TypeScript online submissions for Two Sum.

 */