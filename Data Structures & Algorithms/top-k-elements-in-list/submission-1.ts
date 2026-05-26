class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] { //O(3n) = O(n)
        const countMap = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            countMap.set(nums[i], (countMap.get(nums[i]) ?? 0) + 1);
        }

        console.log(countMap)
        
        const freq: number[][] = Array.from({ length: nums.length + 1 }, () => [])
        console.log(freq)
        for (const [n, f] of countMap) {
            freq[f].push(n);
        }

        console.log(freq)

        const res: number[] = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                k--
                if (k === 0) {
                    return res
                }
            }
        }
    }
}
