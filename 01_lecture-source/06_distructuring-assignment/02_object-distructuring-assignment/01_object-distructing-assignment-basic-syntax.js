//객체 구조 분해 할당 기본 문법
//상품명과 색상, 가격을 프로퍼티로 갖는 객체
let pants = {
    productName:"배기팬츠",
    color:"검정색",
    price:13000
};

//구조 분해 할당을 이용해 productName에 pants.productName을 color엔 pants.color, price에는 pants.price를 할당
let{productName, color, price} =pants;
console.log(productName);
console.log(color);
console.log(price);

//각 변수의 서술 순서는 무관하며 {객체 프로퍼티 : 목표 변수} 형식으로도 작성 가능
let{color: co, price:pr, productName : pn} = pants;
console.log(pn);
console.log(co);
console.log(pr);


