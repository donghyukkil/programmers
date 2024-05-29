function solution(left, right) {
    let result = 0;
    
    for (let i = left; i <= right; i++) {
        // 소수인 숫자 처리
        if (isPrime(i)) {
            result += i;
            
            continue;
        }
        
        // 소수가 아닌 수의 약수 개수 판별
        if (findDivisors(i).length % 2 === 0) {
            result += i;
        } else {
            result -= i;
        }
    }
    
    return result;
}

function isPrime (n) {
    if (n <= 1) {
        return false;
    }
    
    if (n <= 3) {
        return true;
    }
    
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % 1 === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

function findDivisors(n) {
    const divisors = [];
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i);
            
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }

    }
    
    return divisors.sort((a, b) => a - b);
}

// isPrime -> 소수는 약수의 개수가 2개
// 소수가 아니라면 어떤 수의 약수.
// 약수란 어떤 정수를 나누어떨어지게 하는 다른 정수
// 1과 자기 자신,


// left부터 right까지 약수의 개수 판별
// 약수 개수가 % 2 === 0 ? result에 더하고 : 그렇지 않으면 result에서 뺄셈.
