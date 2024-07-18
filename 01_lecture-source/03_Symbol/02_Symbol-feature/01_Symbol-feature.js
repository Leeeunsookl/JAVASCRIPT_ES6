//Symbol 이용시 외부 코드에서 접근 불가, 값도 못 덮어쓰는 프로퍼티 생성 가능

let student = {
    name : "홍길동"
};

//id 심볼 생성 후 프로퍼티 추가
let id = Symbol("id");
student[id] = 1;

// student 객체 값, 프로퍼티 이름 등에 name만 나타나고 id는 나타나지 않음
console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));

console.log(student[id]);

//  객체 리터럴
let student2 = {
    name:"유관순",
    age:16,
    [id] :2
}
//키가 심볼인 프로퍼티는 for...in 반복문에서 배제
for(let key in student2) console.log(key);

/* 외부 스크립트가 라이브러리는 심볼 정보가 없어 프로퍼티에 직접 접근 못함
심볼형 키는 프로퍼티가 우연히라도 사용되거나 덮어씌워질 일이 없음
하지만 완전히 숨길 수 있는 것은 아님. 내장 메소드 Object.getOwnPropertySymbols(obj)를 사용하면 모든 심볼을 볼 수 있다.
하지만 대부분의 라이브러리, 내장 함수 등은 이런 메소드를 사용하지 않음
*/

console.log(Object.getOwnPropertySymbols(student));
console.log(Object.getOwnPropertySymbols(student2));

//System Symbol을 이용하면 내장 메소드 기본 동작 변경 가능
// => Symbol은 중복 되지 않는 상수 값을 생성하는 것은 물론 
// 기존에 작성 된 코드에 영향을 주지 않고 새로운 프로퍼티를 추가하기 위해, 즉 하위 호환성을 보장하기 위해 도입 되었다고 할 수 있다.
