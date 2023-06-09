function romanToInt(s: string): number {
    const chars = [...s];
    const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};

    let result = 0;
    for(let i = 0; i < chars.length; i++){

        const val1 = map[chars[i]];
        const val2 = map[chars[i+1]] ?? null;

        if(val1 < val2){
            result += (val2 - val1);
            i++;
        }else{
            result += val1;
        }

    }
    return result;
};

// Runtime
// 121 ms
// Beats
// 94.37%

// Memory
// 47.8 MB
// Beats
// 69.65%