class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (hashMap.has(diff)) {
                return [i, hashMap.get(diff)]
            }
            hashMap.set(nums[i], i)
        }
    }
}
