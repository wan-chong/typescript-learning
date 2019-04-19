// 类型注解：类型注解是一种轻量级的为函数或变量添加约束的方式
// function greeter(person: string) {
//     return "Hello, " + person;
// }
// let user = "Jane User";
// 接口：这里使用接口来描述一个拥有firstName和lastName字段的对象。
// 注意：接口的字段用分号“;”分割
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = { firstName: "Jane", lastName: "User" };
// 类
// TypeScript支持JavaScript的新特性，比如支持基于类的面向对象编程。
var Student = /** @class */ (function () {
    // 在构造函数的参数上使用public等同于创建了同名的成员变量
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
