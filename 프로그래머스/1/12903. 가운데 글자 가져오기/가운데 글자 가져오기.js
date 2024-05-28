function solution(s) {
    const halfLength = s.length / 2;
    
    if (s.length % 2 === 0) {
        // 문자열 길이가 짝수
        // 문자열 길이 / 2가 -> for loop 해당 인덱스 -1부터 해당 인덱스 포함하는 문자열 더하기
        
        let result = '';
        
        for (let i = halfLength - 1; i <= halfLength; i++) {
            result += s[i];
        }
        
        return result;
    } else {
        return s[Math.floor(halfLength)];
        // 문자열 길이가 홀수
        // 문자열 길이 / 2 -> 나머지 버림 -> 해당 인덱스 리턴
    }
}