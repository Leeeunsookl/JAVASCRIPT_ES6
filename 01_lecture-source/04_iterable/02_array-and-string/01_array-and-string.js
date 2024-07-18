// 배열, 문자열 등은 대표적인 이터러블임

for(let char of "JavaScript"){
    console.log(char);
}
//문자열을 for ...of 반복문으로 호출

//문자열이나 배열같은 내장 이터러블에도 Symbol.iterator가 구현돼 있어 명시적으로 호출 가능
//잘 사용하지는 않지만 필요시 for...of 사용보다 반복 과정을 더 잘 통제할 수 있음
let str = "iterable";

let iterator = str[Symbol.iterator]();

while(true){
    let result = iterator.next()
    if (result.done) break;
    console.log(result.value);
}