// function parameters 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 사용

//fuction displayProduct(producer = "아무개", width = 0, height = 0, items = [] ) {}
//위처럼 하면 넘겨주는 인수 순서 고정돼서 순서바뀌면 문제 생김 
//기본 값 사용시에도 undefined를 이용해서 인수를 넘겨줘야만 함
//ex. displayProduct("신사임당", undefined, undefined, ["Coffee", "Donut"]);

//구조분해할당은 문제 해결 가능
function displayProduct({producer="홍길동", width=10, height=20, items=[]}){
    console.log(`${producer},${width},${height}`);
    console.log(items);
}

//함수에 전달할 객체
let exampleProduct = {
    items:["Coffee","Donut"],
    producer: "신사임당"
};

// 순서도 무관하고 기본 값 활용 시에도 별도의 처리가 불필요
displayProduct(exampleProduct);