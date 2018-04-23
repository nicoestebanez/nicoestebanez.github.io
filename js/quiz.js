function score() {
    var ml4 = {};
    ml4.opacityIn = [0,1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    anime.timeline({loop: true})
        .add({
            targets: '.ml4 .letters-1',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
    });
}

var quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // resultsDiv is the div to display the results in
    var score = 0
    var resultsDiv = document.getElementById("results");
    var aSpan = document.getElementById("a");
    var bSpan = document.getElementById("b");
    var cSpan = document.getElementById("c");
    var reDiv = document.getElementById("re");

    // answer1 stores whatever <input> element that they checked
    //  or null if they didn't check any answer
    var answer1 = document.querySelector('[name="question1"]:checked');
    var answer2 = document.querySelector('[name="question2"]:checked');
    var answer3 = document.querySelector('[name="question3"]:checked');
    var answer4 = document.querySelector('[name="question4"]:checked');
    var answer5 = document.querySelector('[name="question5"]:checked');
    var answer6 = document.querySelector('[name="question6"]:checked');
    document.getElementById("quiz").style.opacity = "0";
    reDiv.innerHTML = "Refresh Page to Start Again"
    if (!answer1) {
        resultsDiv.innerHTML = "You didn't check anything! Sadface";
    } else {
        // answer1.value is the value attribute of the checked <input>
        if (answer1.value === "javascript") {
            score = score + 1
        }
        if (answer2.value === "python") {
            score = score + 1
        }
        if (answer3.value === "infinite") {
            score = score + 1
        }
        if (answer4.value === "website") {
            score = score + 1
        }
        if (answer5.value === "html") {
            score = score + 1
        }
        if (answer6.value === "css") {
            score = score + 1
        }
    }
    if (score === 6) {
        aSpan.innerHTML = "Amazing!"
        bSpan.innerHTML = "You got"
        cSpan.innerHTML = "100%"

    }
    else if (score > 0){
        resultsDiv.innerHTML = "You got " + score + "/6 correct!"
    }
    else {
        resultsDiv.innerHTML = "You got 0 right!!!!! Better luck next time."
    }
    function blink() {
        var f = document.getElementById('results');
        setInterval(function() {
            f.style.display = (f.style.display == 'none' ? '' : 'none');
        }, 10000);
    }

});

