var libForm = document.getElementById("lib-form");
libForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var adj1 = document.getElementById("adj1").value;
    var pln1 = document.getElementById("pln1").value;
    var n1= document.getElementById("n1").value;
    var adv1 = document.getElementById("adv1").value;
    var numb1 = document.getElementById("numb1").value;
    var pttv1 = document.getElementById("pttv1").value;
    var estadj = document.getElementById("estadj").value;
    var pttv2 = document.getElementById("pttv2").value;
    var adv2 = document.getElementById("adv2").value;
    var adj3 = document.getElementById("adj3").value;

    if (n1 === "explosion"){
        document.getElementById("y").src="https://i.ytimg.com/vi/Yxt9ASRCnaE/maxresdefault.jpg"
    }
    else if (n1 === "cat"){
        document.getElementById("y").src="https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg"
    }
    else if (n1 === "dog"){
        document.getElementById("y").src="https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
    }
    else if (pttv1 === "crashed"){
        document.getElementById("y").src="data:image/jpeg;base64,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"
    }
    else if (pttv1 === "ran"){
        document.getElementById("story").innerHTML="SORRY it look like the story ran away!!"
    }
    else{
        document.getElementById("y").src=""
        var storyDiv = document.getElementById("story");
        storyDiv.innerHTML = "Today, my fabulous camp group went to a (an) " + adj1 + " (adjective) amusement park." +
            " It was a fun park with lots of cool " + pln1 + " (plural noun)and enjoyable play structures. " +
            "When we got there, my kind counselor shouted loudly, 'Everybody off the " + n1 + " (noun)'. " +
            "We all pushed out in a terrible hurry. My counselor handed out yellow tickets, and we scurried in. " +
            "I was so excited! I couldn't figure out what exciting thing to do first. " +
            "I saw a scary rollercoaster I really liked so, I " + adv1 + " (adverb) ranover to get in the long" +
            " line that had about " + numb1 + " (number) people in it. " +
            "When I finally got on the roller coaster I was " + pttv1 + " (pasttense verb)." +
            " In fact I was so nervous my two knees were knocking together. " +
            "This was the " + estadj + " (-est adjective) ride I had ever been on! " +
            "In about two minutes I heard the crank and grinding of the gears." +
            "That’s when the ride began! When I got to the bottom, " +
            "I was a little " + pttv2  + " (past tense verb) but I was proud of myself. " +
            "The rest of the day went " + adv2 + " (adverb). It was a(n) " + adj3 + " (adjective) " +
            "day at the fun park.";
    }


});