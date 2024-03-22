function solution(arr, divisor) {
    const answer = [];
    
    for (let ele of arr) {
        if (ele % divisor === 0) {
            answer.push(ele);
        }
    }
    
    if (!answer.length) {
        answer.push(- 1);
    }
    
    return answer.sort((a, b) => a - b);
}