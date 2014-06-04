/*var loaderAnimation = $("#html5Loader").LoaderAnimation({
    onComplete: function () {
        console.log("preloader animation completed!");
    }
});*/


var numberSounds = [];
var musicSounds = [];

$.html5Loader({
    filesToLoad:"js/lib/audio_numbers.json",
    onComplete: function () {
        console.log("All the assets are loaded!");
        //playSound();
    },
    onElementLoaded: function ( obj, elm ) {
        // if(!~$.inArray(obj.type,["TEXT","SCRIPT","CSS"])) {
        //$("#wrapper").append(elm);
        numberSounds.push(elm);
        console.log("wow");
        //}
    }//,
    //onUpdate: loaderAnimation.update
});

$.html5Loader({
    filesToLoad:"js/lib/audio_music.json",
    onComplete: function () {
        console.log("All the assets are loaded!");
        playSound();
    },
    onElementLoaded: function ( obj, elm ) {
        // if(!~$.inArray(obj.type,["TEXT","SCRIPT","CSS"])) {
        //$("#wrapper").append(elm);
        musicSounds.push(elm);
        console.log("wow");
        //}
    }//,
    //onUpdate: loaderAnimation.update
});