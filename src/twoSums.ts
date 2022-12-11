//https://leetcode.com/problems/two-sum/


function twoSum(nums: number[], target: number): number[] {
    for (let firstNum =0; firstNum<nums.length; firstNum++){
        for (let secondNum = firstNum+1; secondNum <= nums.length; secondNum++) {
             let sum:number = nums[firstNum] +nums[secondNum];
             if (sum==target) {
                return [firstNum,secondNum];
             }
            
        }
    }
};
