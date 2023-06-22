console.log("TS test! ! ! ! !");

class User{
    public email:string
    name:string
    city:string = ""
    private readonly code: string = "123456"
    constructor(email: string,name:string){
        this.email = email;
        this.name =name
        this.city
    }
}

class UserOne{

    readonly code: string = "123456"
    constructor(
        public email: string,
        public name: string,
        private userId: string){

    }
}

const personA = new User("xxx@xx.com","xxx")

const personb = new User("xxx@xx.com","xxx")


personA.city = "shenyang"