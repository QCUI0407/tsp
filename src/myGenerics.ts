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

identityFour<Botle>({})


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