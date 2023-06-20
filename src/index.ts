console.log("TS test! ! ! ! !");

class User{
    email:string
    name:string
    city:string = ""
    constructor(email: string,name:string){
        this.email = email;
        this.name =name
    }
}

const personA = new User("xxx@xx.com","xxx")

personA.city = "shenyang"