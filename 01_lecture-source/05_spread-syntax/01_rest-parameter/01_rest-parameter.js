//01. 나머지 매개변수
function merge(msg1, msg2){
    return msg1 + msg2;
}

console.log(merge('안녕하세요.'));
console.log(merge('안녕하세요.', '반갑습니다.'));
console.log(merge('안녕하세요.', '반갑습니다.', '제 이름은 홍길동입니다'));

//함수에 정의된 인수는 2개, 더 적게 전달되면 undefined, 많으면 해당 인수 무시 가능
//이 때 나머지 매개변수 ...를 사용하면 매개변수를 한 데 모아 배열에 담을 수 있음

function mergeAll(...args){
    let message='';

    for(let arg of args) message += args
    
    return message;
}

console.log(mergeAll('안녕하세요.'));
console.log(mergeAll('안녕하세요.', '반갑습니다.'));
console.log(mergeAll('안녕하세요.', '반갑습니다.', '제 이름은 홍길동입니다.'));

/* 유의할 점은 나머지 매개변수는 항상 마지막에 있어야 한다.
function func(arg1, ...args, arg2) {} -> (X)
function func(arg1, arg2, ...args) {} -> (O)
*/