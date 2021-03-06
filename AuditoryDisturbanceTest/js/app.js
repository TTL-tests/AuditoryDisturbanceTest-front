/**
 * Created by kristiak on 4.6.2014.
 */



var app = {};

app.start = function () {
    var numberSequence = generateMockNumberSequence(180);

    playTestSounds(numberSequence);
};

function generateMockNumberSequence(skipNumberCount) {
    var numberSequence = [];
    var currentNumber = 1;  // Start from 1
    var skipNumber = 4;     // The first skipped number

    function isAllowedSkipNumber(number) {
        if (number == 1 || number == 8 || number == 9) {
            return false;
        } else {
            return true;
        }
    }

    function firstNextPossibleSkipNumber(number) {
        number += 4;
        if (number > 9) number -= 9;
        if (isAllowedSkipNumber(number) == false) {
            number = 2;
        }
        return number;
    }

    function fourNextSkipNumbers(fromNumber) {
        var possibleNumbers = [];

        possibleNumbers[0] = firstNextPossibleSkipNumber(fromNumber);

        for (var i = 1; i < 4; i++) {
            var nextNumber =  possibleNumbers[i-1] + 1;
            if (isAllowedSkipNumber(nextNumber) == false) {
                nextNumber = 2;
            }
            possibleNumbers[i] = nextNumber;
        }
        return possibleNumbers;
    }

    do {
        numberSequence.push(currentNumber);

        nextNumber = currentNumber + 1;
        if (nextNumber == 10) nextNumber = 1;

        if (nextNumber == skipNumber) {

            nextNumber++;
            if (nextNumber == 10) nextNumber = 1;

            var nextSkipNumbers = fourNextSkipNumbers(nextNumber);
            skipNumber = nextSkipNumbers[Math.floor(Math.random() * 4)];

            skipNumberCount--;
        }
        currentNumber = nextNumber;
    } while (skipNumberCount >= 0);

    return numberSequence;
}



function playTestSounds(numberSequence) {

    numberSequence.index = 0;
    var sequenceExhausted = false;

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
            } else {
                sequenceExhausted = true;
            }
        };
        numberSounds[numberSequence[0]-1].play();
    }

    playDisturbanceSound = function () {
        if (sequenceExhausted == false) {
            var wordOrMusic = Math.floor(Math.random()*2);
            if (wordOrMusic == 0) {
                var whichWord = Math.floor(Math.random()*wordSounds.length);
                wordSounds[whichWord].play();
            } else {
                var whichMusic = Math.floor(Math.random()*musicSounds.length);
                musicSounds[whichMusic].play();
            }
        } else {
            clearInterval(disturbance);
        }
    };

    var disturbance = setInterval (playDisturbanceSound, 4000);

}