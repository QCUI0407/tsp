abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string
    ){}
}

class Instagram extends TakePhoto{

}
const qc = new Instagram("test","test")
 