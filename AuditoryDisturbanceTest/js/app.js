/**
 * Created by kristiak on 4.6.2014.
 */


function playTestSounds() {

    var numberSequence = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5];
    numberSequence.index = 0;

    var delaysBetweenNumbers = [100,125,150,175,200];

    for (var i = 0; i < numberSounds.length; i++) {
        numberSounds[i].onended = function () {
            numberSequence.index++;
            if (numberSequence.index < numberSequence.length) {
                var randomDelayIndex = Math.floor(Math.random() * delaysBetweenNumbers.length);
                //console.log("Delay: " + delaysBetweenNumbers[randomDelayIndex]);
                setTimeout (function () {
                    numberSounds[numberSequence[numberSequence.index] - 1].play();
                }, delaysBetweenNumbers[randomDelayIndex]);
            }
        };
        numberSounds[numberSequence[0]-1].play();
    }

    playMusicSound = function () {
        var wordOrMusic = Math.floor(Math.random()*2);
        if (wordOrMusic == 0 ) {
            var whichWord = Math.floor(Math.random()*wordSounds.length);
            wordSounds[whichWord].play();
        } else {
            var whichMusic = Math.floor(Math.random()*musicSounds.length);
            musicSounds[whichMusic].play();
        }
    }

    setInterval (playMusicSound, 4000);

}