"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// How abstract classes work is that they only function AS A BLUEPRINT
// You can't create a new abstract class instance of TakePhoto, only extensions of it
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some bs calculations
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        // invokes superclass's constructors
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
// You can only call extensions of abstract classes
const rafa = new Instagram('nadal', 'federer', 3);
rafa.getReelTime();
