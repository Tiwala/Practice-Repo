// How abstract classes work is that they only function AS A BLUEPRINT
// You can't create a new abstract class instance of TakePhoto, only extensions of it
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void;
    getReelTime(): number {
        // some bs calculations
        return 8
    }
}


class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        // invokes superclass's constructors
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

// You can only call extensions of abstract classes
const rafa = new Instagram('nadal', 'federer', 3)
rafa.getReelTime();

export {} 