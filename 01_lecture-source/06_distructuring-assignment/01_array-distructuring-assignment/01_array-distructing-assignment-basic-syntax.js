// 배열 구조 분해  할당! 배열이나 객체를 변수로 '분해'해서 연결 가능

let nameArr = ["Gildong", "Hong"];  //이름과 성을 요소로 가진 배열

let [firstName, lastName] = nameArr;
// let firstName = nameArr[0];
// let lastName = nameArr[1];

//구조 분해 할당을 통해 firstName엔 nameArr[0], lastName nameArr[1] 할당

console.log(firstName);
console.log(lastName);

//반환 값이 배열인 split 메서드 활용 예제

let[firstName2, lastName2] = "Saimdang Shin".split('');
console.log(firstName2);
console.log(lastName2);

//쉼표 사용해 필요하지 않은 배열 요소 버릴 수 있음
let[firstName3, lastName3] = ['firstName','middleName','lastName'];
console.log(firstName2);
console.log(lastName2);