function solution(s) {
    // 정렬 문제
    // const array = [...s];
    const char= [];
    const capitalChar = [];
    
    for (let i = 0; i < s.length; i++) {
        if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(s[i])) {
            char.push(s[i]);
        } else {
            capitalChar.push(s[i]);
        }
    }
    
    char.sort((a, b) => a.localeCompare(b) > b.localeCompare(a) ? - 1 : 1);
    capitalChar.sort((a, b) => a.localeCompare(b) > b.localeCompare(a) ? - 1 : 1);
   
    return char.concat(capitalChar).join("");
}