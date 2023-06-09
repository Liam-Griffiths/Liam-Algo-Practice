//O(N^2)
function sum_char_codes1(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            sum += i+j;
        }
    }

    return sum;
}

//O(N^3)
function sum_char_codes2(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            for (let k = 0; k < n.length; ++k) {
                sum += i+j+k;
            }
        }
    }
    return sum;
}