var good = document.getElementById('good')
var ok = document.getElementById('ok')
var bad = document.getElementById('bad')

var goodtext = document.getElementById('goodtext');
var oktext = document.getElementById('oktext');
var badtext = document.getElementById('badtext');

var enjoy = document.getElementById('enjoy');
var goodbye = document.getElementById('goodbye');

var textLst = [goodtext, oktext, badtext, enjoy, goodbye];

var clicked = false;
var lastClicked = null;

var showText = function(i) {
    textLst[i].style.opacity = 1;
    setTimeout(function() {
        textLst[3].style.opacity = 1;
        setTimeout(function() {
            textLst[4].style.opacity = 1;
            textLst[4].style.cursor = "pointer";
        }, 1500);
    }, 1000);
}

var showWrap = function(i) {
    if (!clicked) {
        clicked = true;
        showText(i)
    } else {
        textLst[lastClicked].style.opacity = 0;
        setTimeout(function() {
            textLst[i].style.opacity = 1;
        }, 1000);
    }
    lastClicked = i;
}

textLst[4].addEventListener('click', function(e) {
    clicked = false;
    textLst[4].style.cursor = "default";
    for (var i = 0; i < 5; i++) {
        textLst[i].style.opacity = 0;
    }
});