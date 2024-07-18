// 02. class expressions(클래스 표현식)

// 익명 클래스
let Tutor = class{
    teach(){
        console.log('이해하셨나요?');
    }
};

new Tutor().teach();

// 기명 클래스
let Tutee = class MyTutee {
    learn(){
        console.log('이해했어요');
        console.log(MyTutee);   //MyTutee는 클래서 안에서만 사용
    }
};

 new Tutee().learn();

 // 클래스 동적 생성
 function makeTutee(message){
    //class 선언하고 반환
    return class{
        feedback(){
            console.log(message);
        };
    };
 }

 let SecondTutee = makeTutee("10점 만점에 10점");
 new SecondTutee().feedback();

 /* => 클래스 표현식 정의가 가능하다는 것의 의미는
 함수처럼 클래스도 일급 객체이며 다른 표현식 내부에서 정의, 전달, 반환, 할당이 가능하다는 것
 */

 
