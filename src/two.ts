interface TakePhoto{
    cameraMode:string
    filter:string
    burst:number
}

class Tiktok implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
            
    
    ){}
}