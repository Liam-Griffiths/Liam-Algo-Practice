function lengthOfLongestSubstring(s: string): number {
    let bestCount = 0;
    let i = 0;
    for(let char of s){
        // @ts-ignore
        let map = new Map<string, boolean>();
        for(let char of s.substring(i)){
            const mapGet = map.get(char);
            if(mapGet){
                break;
            }else{
                map.set(char, true);
                if(map.size > bestCount) bestCount = map.size;
            }
        }
        i++;
    }
    return bestCount;
};

/*
Success
Details
Runtime: 455 ms, faster than 21.24% of TypeScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 49.8 MB, less than 28.55% of TypeScript online submissions for Longest Substring Without Repeating Characters.
 */