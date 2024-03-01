function solution(arr) {
    if (arr.length === 1) {
        return [- 1];
    }
    
    return arr.filter((ele) => ele !== Math.min(...arr));
}