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

    // private _courseCount = 1

    protected _courseCount = 1

    readonly code: string = "123456"
    constructor(
        public email: string,
        public name: string,
        private userId: string){
    }
    get getAppEmail():string{
        return `app${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more tham 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends UserOne{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const personA = new User("xxx@xx.com","xxx")

const personB = new User("xxx@xx.com","xxx")


personA.city = "shenyang"