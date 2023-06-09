// for loop is dependent on the length of string
// if the string grows by 1 so must the number of loops increase by 1
// this is linear growth
// O(N)

function sum_char_codes(n: string): number { // one input
    let sum = 0;
    for (let i = 0; i < n.length; ++i) { // one loop
        sum += n.charCodeAt(i);
    }

    return sum;
}