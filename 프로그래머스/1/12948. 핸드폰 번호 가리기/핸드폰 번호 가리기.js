function solution(phone_number) {
    const array = new Array(phone_number.length - 4).fill('*');
    
    return array.join('') + phone_number.slice(phone_number.length - 4);
} 