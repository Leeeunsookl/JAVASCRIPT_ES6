/* 01_Symbol (심볼)
자바스크립트가 ECMAScript로 표준화 된 이래로 자바스크립트에는 6개의 타입(문자열, 숫자, 불리언, undefined, null, 객체)이 있었다.
Symbol은 ES6에서 도입 된 7번째 데이터 타입으로 변경 불가능한 원시 타입의 값이다.
Symbol은 다른 값과 중복 되지 않는 유일무이한 값으로 주로 이름 충돌의 위험이 없는 유일한 프로퍼티 키를 만들기 위해 사용 된다.
*/

// 1. 심볼 기본 문법 : Symbol() 사용하면 심볼 값 생성 가능
let symbol1 = Symbol();

// 디버깅 시에 유용한 심볼 이름을 붙여서 심볼 값 생성 값
let symbol2 = Symbol("mys");

// 심볼은 유일성이 보장되는 자료형, 설명이 동일한 심볼이 여러개여도 각 심볼 값은 다름
// 심볼 이름은 어떤 것에도 영향을 주지 않는 "이름표" 역할만을 함
let symbol3 = Symbol("mys");
console.log(symbol2 == symbol3);    //false

// 전역 심볼 레지스트리(global symbol registry)에 심볼을 만들고 해당 심볼에 접근하면, 이름이 같은 경우 항상 동일한 심볼을 반환한다.
// Symbol.for(key)를 사용해 이름이 key인 심볼을 전역 심볼 레지스트리에서 읽는다.
let symbol = Symbol.for("id");  //심볼이 존재하지 않으면 새로운 심볼을 만든다.

// 동일한 이름을 이용해 심볼을 다시 읽는다
let idAgain = Symbol.for("id");

console.log(symbol === idAgain); //true

//반대로 Symbol.keyFor(symbol)를 사용하면 이름을 얻을 수 있다.
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
console.log(Symbol.keyFor(sym));    //name
console.log(Symbol.keyFor(sym2));   //id

/* 심볼은 이름이 같더라도 값이 항상 다르므로 이름이 같을 때 값도 같길 바라면 전역 레지스트리 사용해야 함
전역 심볼 레지스트리는 애플리케이션 곳곳에서 심볼 이름을 이용해 특정 프로퍼티에 접근해야 할 경우 사용할 수 있음
*/

