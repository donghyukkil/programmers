function solution(s){
    const sToLowerCase = s.toLowerCase();
    
    let p = 0;
    let y = 0;
    
    // 1. <Boolean> p와 y의 개수 비교
    // 2. 같거나 하나도 없으면 true, 다르면 false
    
    for (let i = 0; i < sToLowerCase.length; i++) {
        if (sToLowerCase[i] === 'p') {
            p++;
        } else if (sToLowerCase[i] === 'y') {
            y++;
        }
    }
    
    return p === y;
}