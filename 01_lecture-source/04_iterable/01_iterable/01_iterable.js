//ES6에서는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for...of문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다.

//iterable은 메소드에 Symbol.iterator가 구현된 객체이다.
let range = {
    from:1,
    to:5
};

//Symbol.iterator 추가, for..of 최초 호출하면 호출됨
range[Symbol.iterator] = function () {
    
    return{
        current: this.from,
        last: this.to,
        //for..of 반복문에 의해 반복마다 next() 호출

        //next()는 값을 객체{done:..., value:...} 형태로 반환
        //done은 반복이 끝난 걸 의미, 끝나지 않았으면 value 값 반환
        next(){
            if(this.current <= this.last){
                return{done:false, value: this.current++ }
            } else {
                return{done : true};
            }
        }
    };
};

// 객체 선언 후 for..of 반복문을 호출하면 range is not iterable 이라는 오류가 발생한다.
// Symbol.iterator를 추가한 뒤 1~5까지의 숫자가 출력 된다.
for (let num of range) {
    console.log(num);
}
