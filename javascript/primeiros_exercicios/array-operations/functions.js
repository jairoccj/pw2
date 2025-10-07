export function sum(array){
    return array.reduce((total=0, n) => total += n);
}

export function sumOdds(array){
    return sum(array.filter((n) => n & 1));
}

export function product(array){
    return array.reduce((total=1, n) => total *= n);
}