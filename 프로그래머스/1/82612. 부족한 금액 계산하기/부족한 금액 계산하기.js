function solution(price, money, count) {
    let total = 0;
    
    // 총 이용 금액 계산
    for (let i = 1; i <= count; i++) {
        total += price * i; 
    }
    
    // 필요한 금액과 가진 금액 비교
    if (money >= total) {
        return 0;
    } else {
        return total - money;
    }
}
