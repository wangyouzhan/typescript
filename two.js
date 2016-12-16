
/**
 * Created by wangyouzhan on 2016/12/16.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function () {
    console.log('hello, my name is ' + this.name);
};

function Man() {

}




Man.prototype = new Person('pursue');

var man1 = new Man();
man1.say();

var man2 = new Man();

console.log(man1.say == man2.say);




































