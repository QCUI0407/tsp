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