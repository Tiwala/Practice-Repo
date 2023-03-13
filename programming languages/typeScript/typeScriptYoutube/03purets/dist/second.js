"use strict";
// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }
// // To implement TakePhoto, you have to create a constructor which has TakePhoto's properties
// class Instagram implements TakePhoto {
//     // if constructor is not there or doesn't contain interface properties, throws error
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) {
//     }
// }
// interface Story {
//     createStory(): void
// }
// class Youtube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         // you can create more properties but not less
//         public short: string
//     ) {
//     }
//     // since this is a method, you don't put it in the constructor
//     createStory(): void {
//         console.log("Story was created");
//     }
// }
