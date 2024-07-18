// 화살표 함수 : 항상 익명 함수로 정의, 본문이 한 줄인 함수일 때 유용!

let message;
message = function(){
    return "Hello";
}

console.log(message);

message = () => {
    return "화살표 함수";
}   //function 생략이 가능함

console.log(message);

message = () => "화살표 함수는 간단해";
//명령문이 하나면 중괄호도 생략 가능, 함수 몸체 내부 문이 값으로 평가될 수 있는 표현문이라면 암묵적 반환
//return도 생략 가능

console.log(message());

//매개변수 있을 시 하나라면 소괄호 생략 가능, 여러개면 생랴은 불가
message = (val1, val2) => "Arrow" + val1 + val2;
console.log(message('Function','!'));

message = val => "Arrow" + val;
console.log(message('Functions are GOOD!!'));

//객체 리터럴을 반환할 시 소괄호로 감싼다.
const createUser = (id, name) => ({id, name});
console.log(createUser(1, "유관순"));

//소괄호로 안감싸면? 함수 몸체 중괄호로 잘못 해석함
const createUser2 = (id, name) => {id, name};
console.log(createUser2(2, '홍길동'));

//고차 함수에 인수로 전달 가능, 일반적 함수 표현식보다 간결해진다.
console.log([1,2,3,4,5].map(function(val){return val*10}));
console.log([1,2,3,4,5].map(val => val*10));



