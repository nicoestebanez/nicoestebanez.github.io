
function addImage(e) {
    var imgUrl = $('#imgUrl').val();
    if (imgUrl.length){
        $('#imageContainer img').attr('src', imgUrl)
    }
    e.preventDefault();
}
var img = document.getElementById("image")
var filet = document.getElementById("file")

function editImage() {
    var gs 		 = $("#gs").val();
    var blur 	 = $("#blur").val();
    var br 		 = $("#br").val();
    var ct 		 = $("#ct").val();
    var huer	 = $("#huer").val();
    var opacity      = $("#opacity").val();
    var invert 	 = $("#invert").val();
    var saturate     = $("#saturate").val();
    var sepia 	 = $("#sepia").val();
    var rb = $("#rb").val();

    var filter = 	'grayscale(' + gs+
        '%) blur(' + blur +
        'px) brightness(' + br +
        '%) contrast(' + ct +
        '%) hue-rotate(' + huer +
        'deg) opacity(' + opacity +
        '%) invert(' + invert +
        '%) saturate(' + saturate +
        '%) sepia(' + sepia + '%) ';

    $("#imageContainer img").css("filter", filter);
    $("#imageContainer img").css("-webkit-filter", filter);
}


$('#go').click(addImage);

$("#urlBox").submit(addImage);

$("input[type=range]").change(editImage).mousemove(editImage);

$('#imageEditor').on('reset', function() {
    setTimeout(function() {
        editImage();
    },0);
});



filet.addEventListener('change', function (){
    var file = filet.files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        img.src = reader.result;
    };
    if(file){
        reader.readAsDataURL(file);
    }else{
    }
}, true);
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();
    var timeOfDay = ( h < 12 ) ? "AM" : "PM";
    if (h > 12) {
        h = h - 12
    }
    m = checkTime(m);
    s = checkTime(s);
    ms = checkTime(ms);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s + ":" + ms + " " + timeOfDay;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
