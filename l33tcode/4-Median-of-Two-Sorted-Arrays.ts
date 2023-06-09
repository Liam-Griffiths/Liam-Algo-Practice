function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let merged = [];
    let flag = false;
    let n1 = 0;
    let n2 = 0;
    while(flag === false){
        let x = nums1[n1] ?? null;
        let y = nums2[n2] ?? null;
        if(x === null && y === null){
            flag = true;
            break;
        }
        if(x === null){
            merged.push(y);
            n2++;
            continue;
        };
        if(y === null){
            merged.push(x);
            n1++;
            continue;
        };
        if(x < y){
            merged.push(x);
            n1++;
            continue;
        } else {
            merged.push(y);
            n2++;
            continue;
        }
    }

    const len = merged.length + 1;
    const isEven = len % 2;

    if(isEven === 0){
        const mid = (len / 2) - 1;

        return merged[mid];
    }

    let mid1 = ((len - 1) / 2) - 1;
    if(mid1 < 0) mid1 = 0;
    let mid2 = mid1 + 1;

    return (merged[mid1] + merged[mid2]) / 2;
};

/*

Success
Details
Runtime: 168 ms, faster than 61.69% of TypeScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 48.1 MB, less than 68.28% of TypeScript online submissions for Median of Two Sorted Arrays.

 */