// for loop is dependent on the length of string
// if the string grows by 1 so must the number of loops increase by 1
// there are two non nested loops
// this is still linear growth
// O(2N)
// constants are dropped
// O(N)

function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}