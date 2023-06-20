console.log("TS test! ! ! ! !");
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var personA = new User("xxx@xx.com", "xxx");
personA.city = "shenyang";
