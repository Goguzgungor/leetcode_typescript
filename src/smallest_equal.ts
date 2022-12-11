

//https://leetcode.com/problems/smallest-index-with-equal-value/description/
function smallestEqual(nums: number[]): number {
    let selecetedIndex:number = -1;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const mod =index%10;
        if (mod == element) {
            selecetedIndex = index;
            break;
        }

    }

    return selecetedIndex;
};