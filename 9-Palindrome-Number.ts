function isPalindrome(x: number): boolean {
    /*const arr = [...`${x}`];
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        if(arr[left] !== arr[right]) return false;
        left++;
        right--;
    }
    return true;*/

    const y = parseInt(x.toString().split("").reverse().join(""));
    return y === x;
};

// Runtime
// 216 ms
// Beats
// 38.70%
// Memory
// 52.1 MB
// Beats
// 23.2%