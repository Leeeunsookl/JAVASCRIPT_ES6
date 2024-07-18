// 02. 정적 프로퍼티
// 스펙에 추가된지 얼마 안된 문법, 데이터를 클래스 수준에 저장하고 싶을 때 사용

class Animal{

    static planet = "지구";

    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight){
        this.weight += foodWeight;
        console.log(`${this.name}은 ${foodWeight}kg 식사를 하고 ${this.weight}kg이 되었습니다.`)
    }

    move(lostWeight){
        if (this.weight > lostWeight)
            this.weight -= lostWeight;

        console.log(`${this.name}은 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`)
    }

    static compare(animalA, animalB){
        return animalA.weight = animalB.weight;
    }
}

Animal.staticProperty = 'static을 사용한 선언은 기술적으론 클래스 자체에 선언한 것과 같음';

class Human extends Animal{

    develop(language){
        console.log(`${this.name}은 ${language}로 개발합니다`);
    }
}

let humans = [
    new Human('일',130),
    new Human('이',150),
    new Human('삼',170)
];

humans.sort(Human.compare);

humans[0].develop('JavaScript');

console.log(Human.planet);      //정적 프로퍼티 상속됨
console.log(Human.staticProperty);      //직접 할당한 경우도 동일하게 동작

console.log(Human.__proto__ === Animal);    //true - 정적 메소드 존재
console.log(Human.prototype.__proto__===Animal.prototype);      //true - 인스턴스 메소드 존재