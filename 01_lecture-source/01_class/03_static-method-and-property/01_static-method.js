//정적 메소드와 프로퍼티

// 01. static method(정적 메소드)
//정적 메소드는 특정 클래스 인스턴스가 아니라 클래스'전체'에 필요한 기능을 만들 때 사용
class Student{

    constructor(name,height){
        this.name = name;
        this.height = height;
    }

    static compare(studentA, studentB){
        return studentA.height - studentB.height;   
    }   //인스턴스끼리 비교해주는 메소드, static이 선언부 안에 위치함을 알 수 있음
}

let students = [
    new Student('일', 130),
    new Student('이', 150),
    new Student('삼', 170)
];

students.sort(Student.compare);
console.log(students);
//Students.compare은 학생마다 필요한 메소드x, 클래스의 메소드

Student.staticMethod();

class User{

    constructor(id, registDate){
        this.id = id;
        this.registDate = registDate;
    }

    static registUser(id){
        return new this(id, new Date());
    }
}

let user01 = User.registUser('user01');     //id값에 user01 넣어서 새로운 객체 생성
console.log(user01);
