class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] { // O(nL), n = words L = letters in a word
        const hashMap = new Map<string, string[]>();
        
        for (let w: number = 0; w < strs.length; w++) {
            let lArr: Array<number> = Array(26).fill(0)
            
            for (let l: number = 0; l < strs[w].length; l++) {
                const letterInd: number = strs[w].charCodeAt(l) - 97
                lArr[letterInd]++;               
            }
            //join into string key
            const strKey = lArr.join("#");
            
            if (hashMap.has(strKey)) {
                hashMap.get(strKey).push(strs[w]);
            } else {
                hashMap.set(strKey, [strs[w]]);
            }
        }

        return Array.from(hashMap.values())
    }
}
