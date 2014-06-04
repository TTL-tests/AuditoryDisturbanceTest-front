/*var loaderAnimation = $("#html5Loader").LoaderAnimation({
    onComplete: function () {
        console.log("preloader animation completed!");
    }
});*/


var numberSounds = [];
var musicSounds = [];
var wordSounds = [];

$.html5Loader({
    filesToLoad:"js/lib/audio_numbers.json",
    onComplete: function () {

    },
    onElementLoaded: function ( obj, elm ) {
        //$("#wrapper").append(elm);
        numberSounds.push(elm);
    }
});

$.html5Loader({
    filesToLoad:"js/lib/audio_music.json",
    onComplete: function () {
    },
    onElementLoaded: function ( obj, elm ) {
        musicSounds.push(elm);

    }
});

$.html5Loader({
    filesToLoad:"js/lib/audio_word.json",
    onComplete: function () {
        console.log("All the assets are loaded!");
        playTestSounds();
    },
    onElementLoaded: function ( obj, elm ) {
        wordSounds.push(elm);
    }

});