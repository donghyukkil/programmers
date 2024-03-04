function solution(n) {
    // n의 약수 모두 구하기
    // 약수를 모두 더하기
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        } else if (i === 1 || i === n) {
            result.push(i);
        }
    }
    
    return result.reduce((acc, cur) => acc+ cur, 0);
}