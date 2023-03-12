"use strict";
// To implement TakePhoto, you have to create a constructor which has TakePhoto's properties
class Instagram {
    // if constructor is not there or doesn't contain interface properties, throws error
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, 
    // you can create more properties but not less
    short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    // since this is a method, you don't put it in the constructor
    createStory() {
        console.log("Story was created");
    }
}
