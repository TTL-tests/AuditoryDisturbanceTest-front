/**
 * Created by kristiak on 4.6.2014.
 */


function playSound() {

    var numberSequence = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6];
    numberSequence.index = 0;

    for (var i = 0; i < numberSounds.length; i++) {
        numberSounds[i].onended = function () {
            numberSequence.index++;
            if (numberSequence.index < numberSequence.length) {
                numberSounds[numberSequence[numberSequence.index]-1].play();
            }
        };
        numberSounds[numberSequence[0]-1].play();
    }

    playMusicSound = function () {
        musicSounds[0].play();
    }

    setTimeout (playMusicSound, 4000);

}