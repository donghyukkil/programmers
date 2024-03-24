function solution(numbers) {
    // @params: <Array>
    // for loop (0 ~ 9) 배열이 가지지 않은 것 더하기
    // <Number> count;
    
    let count = 0;
    
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            count += i;
        }
    }
    
    return count;
}