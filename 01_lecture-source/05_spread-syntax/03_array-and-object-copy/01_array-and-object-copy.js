//스프레드 문법을 이용한 배열, 객체 복사

let arr = [10,20,30]
let arrCopy = [...arr]
console.log(arr);
console.log(arrCopy);
console.log(arr === arrCopy);       //false
arrCopy.push(50);   //복사본 배열에 값 추가
console.log(arr);
console.log(arrCopy);

//스프레드 문법 대상은 이터러블이어야 하나 스프레드 프로퍼티 제안은 일반 객체 대상으로도 허용 중
let obj = {name : "홍길동", age : 20};
let objCopy = {...obj};
console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);       //false
objCopy.age = 30;       //복사본 객체에 값 수정
console.log(obj);
console.log(objCopy);



