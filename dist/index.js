console.log("TS test! ! ! ! !");
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "";
        this.code = "123456";
        this.email = email;
        this.name = name;
        this.city;
    }
    return User;
}());
var UserOne = /** @class */ (function () {
    function UserOne(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.code = "123456";
    }
    return UserOne;
}());
var personA = new User("xxx@xx.com", "xxx");
var personb = new User("xxx@xx.com", "xxx");
personA.city = "shenyang";
