class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l: number = 0;
        let r: number = s.length - 1;

        while (l < r) {
            //check validity
            const lLetter: number = s[l].toLowerCase().charCodeAt(0);
            if ((97 > lLetter || lLetter > 122) && (lLetter < 48 || lLetter > 57)) {
                l++;
                continue;
            } 
            
            const rLetter: number = s[r].toLowerCase().charCodeAt(0)
            if((97 > rLetter || rLetter > 122) && (rLetter < 48 || rLetter > 57)) {
                r--;
                continue;
            } 

            if (lLetter !== rLetter) {
                return false;
            }
            l++;
            r--;
        }
        return true;

    }
}
