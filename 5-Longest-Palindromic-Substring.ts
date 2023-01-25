function longestPalindrome(s: string): string {

    let searchLength = s.length;
    let searchPos = 0;

    while(searchLength > 0){

        let testString = s.substring(searchPos, searchPos + searchLength)
        let testResult = couldPalindrome(testString);

        if(testResult){
            return testString;
        }else{
            if(searchPos + searchLength === s.length){
                searchLength--;
                searchPos = 0;
            }else{
                searchPos++;
            }
        }
    }

    function couldPalindrome(testStr: string): boolean {
        let startPos = 0;
        let endPos = testStr.length -1;
        if(testStr.length === 1) return true;
        const isEven = testStr.length % 2;
        while(true){
            if(testStr[startPos] !== testStr[endPos]){
                return false;
            } else {
                if(isEven === 1){
                    if((startPos + 2) === endPos){
                        return true;
                    }
                }else{
                    if((startPos + 1) === endPos){
                        return true;
                    }
                }
                startPos = startPos + 1;
                endPos = endPos - 1;
            }
        }
    }
};

/*

Success
Details
Runtime: 800 ms, faster than 32.12% of TypeScript online submissions for Longest Palindromic Substring.
Memory Usage: 49.3 MB, less than 44.74% of TypeScript online submissions for Longest Palindromic Substring.


 */