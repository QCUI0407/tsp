const score: Array<number> = []
const names:Array<string>=[]

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

// use same letter <H>(val:H):H
function identityFour<T>(val:T):T{
    return val
}

interface Botle{
    brand:string,
    type:number
}

identityFour<Botle>({
    brand:"Ssd",
    type:4})


// ----------------------

function searchProducts<T>(products: T[]):T{
//    database
    const myIndex = 3
    return products[3]
}

// arrow fun

const searchMore = <T>(products:T[]): T => {
    const myIndex = 4
    return products[myIndex]
}

interface Database{
    connection:string,
    username:string,
    password:string
}

function exFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

exFunction(3,{
    connection:"xxx",
    username:"sss",
    password:"www"})

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[]

    addToCart(product: T){
        this.cart.push(product)
    }
}