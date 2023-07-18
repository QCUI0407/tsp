function detectType(val:number | string ){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 1
}

function provideId(id:string | null){
    if(!id){
        console.log("plesase enter ID");
        return
    }
    id.toLowerCase()
}

interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function adminAccpunt(account: User |Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}