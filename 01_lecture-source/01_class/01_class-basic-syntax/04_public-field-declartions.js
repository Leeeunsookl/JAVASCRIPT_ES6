class Book{
    name="모던JavaScript";
    //this.는 constructor 내부에만 작성 가능
    price;

    introduce(){
        console.log(`${this.name}가 그렇게 재밌죠`);
    }
}

let book = new Book();
book.introduce();
console.log(book.name);
console.log(Book.prototype.name);
console.log(book.price);