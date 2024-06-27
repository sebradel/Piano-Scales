// Handles user input and displays the piano scales

// Coordinates for each of the 24 notes
const noteX = [222, 243, 265, 286, 307, 350, 371, 393, 414, 436, 457, 479,
    521, 542, 564, 585, 607, 650, 671, 693, 714, 736, 757, 778];
const noteY = [153, 80, 153, 80, 153, 153, 80, 153, 80, 153, 80, 153,
    153, 80, 153, 80, 153, 153, 80, 153, 80, 153, 80, 153];

var rootClicked = false;    // Whether a root note has been chosen
var scaleClicked = false;   // Whether a scale type has been chosen
var rootIndex;              // Index of the root note in the noteX and noteY arrays
var scale;                  // Scale type

// Displaying piano image in canvas
var canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var keys = new Image();
keys.src = 'piano.png';
keys.onload = function(){
    ctx.drawImage(keys, 200, 0, 600, 200);
}

// Root note buttons
var c = document.getElementById('c');
var cSharp = document.getElementById('c#');
var d = document.getElementById('d');
var dSharp = document.getElementById('d#');
var e = document.getElementById('e');
var f = document.getElementById('f');
var fSharp = document.getElementById('f#');
var g = document.getElementById('g');
var gSharp = document.getElementById('g#');
var a = document.getElementById('a');
var aSharp = document.getElementById('a#');
var b = document.getElementById('b');

// Scale type buttons
var major = document.getElementById('major');
var minor = document.getElementById('minor');
var majorPent = document.getElementById('majorPent');
var minorPent = document.getElementById('minorPent');
var majorBlues = document.getElementById('majorBlues');
var minorBlues = document.getElementById('minorBlues');

// Show/clear scale buttons
var show = document.getElementById('show');
var clear = document.getElementById('clear');

// Events for root buttons
c.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 0;
});
cSharp.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 1;
});
d.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 2;
});
dSharp.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 3;
});
e.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 4;
});
f.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 5;
});
fSharp.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 6;
});
g.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 7;
});
gSharp.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 8;
});
a.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 9;
});
aSharp.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 10;
});
b.addEventListener('click', function(){
    rootClicked = true;
    rootIndex = 11;
});

// Events for scale buttons
major.addEventListener('click', function(){
    scaleClicked = true;
    scale = 'major';
});
minor.addEventListener('click', function(){
    scaleClicked = true;
    scale = 'minor';
});
majorPent.addEventListener('click', function(){
    scaleClicked = true;
    scale = 'majorPent';
});
minorPent.addEventListener('click', function(){
    scaleClicked = true;
    scale = 'minorPent';
});
majorBlues.addEventListener('click', function(){
    scaleClicked = true;
    scale = 'majorBlues';
});
minorBlues.addEventListener('click', function(){
    scaleClicked = true;
    scale = 'minorBlues';
});

// Events for show/clear scale buttons
show.addEventListener('click', showScale);
clear.addEventListener('click', clearScale);

// Clears the currently displayed scale from the screen
function clearScale() {
    var keys = new Image();
    keys.src = 'piano.png';
    keys.onload = function(){
        ctx.drawImage(keys, 200, 0, 600, 200);
    }
    scaleClicked = false;
    rootClicked = false;
}

// Displays the chosen scale on the screen
function showScale() {
    if((rootClicked==false) || (scaleClicked==false)) {
        alert('Please choose a root note and a scale type');
        return;
    }
    var index = rootIndex;

    // Each case corresponds to a different scale
    switch (scale) {
        case 'major':
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index++;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            break;
        case 'minor':
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index++;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index++;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            break;
        case 'majorPent':
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index = index + 3;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            break;
        case 'minorPent':
            drawCircle(noteX[index], noteY[index]);
            index = index + 3;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index = index + 3;
            drawCircle(noteX[index], noteY[index]);
            break;
        case 'majorBlues':
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index++;
            drawCircle(noteX[index], noteY[index]);
            index++;
            drawCircle(noteX[index], noteY[index]);
            index = index + 3;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            break;
        case 'minorBlues':
            drawCircle(noteX[index], noteY[index]);
            index = index + 3;
            drawCircle(noteX[index], noteY[index]);
            index = index + 2;
            drawCircle(noteX[index], noteY[index]);
            index++;
            drawCircle(noteX[index], noteY[index]);
            index++;
            drawCircle(noteX[index], noteY[index]);
            index = index + 3;
            drawCircle(noteX[index], noteY[index]);
            break;

        default:
            alert('ERROR: Something has gone wrong.');
    }
}

// Draws a circle in canvas at the given xy coordinates
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2*Math.PI, false);
    ctx.fillStyle = '#88e7f5';
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.fill();
    ctx.stroke();
}

