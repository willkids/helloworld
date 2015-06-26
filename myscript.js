


function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "lightoff.jpg"
    } else {
        pic = "lighton.jpg"
    }
    document.getElementById('myimage').src = pic;
}

 function myFunction1() {
            alert("try evrthing on my other site at hikids.azurewebsites.net");
        }
function setday() {
   window.alert(1092 + 9277487893 + 478493);
        var day;
        switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
        }
        document.getElementById("dayofweek").innerHTML = "Today is " + day;
}



<img id="lamo" src="lamo.jpg" "width="300" height="300">

<p>Canvas to fill:</p>
<canvas id="my1Canvas" width="300" height="300"
style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<p><button onclick="my1Canvas()">Try it</button></p>

<script>
function myCanvas() {
    var c = document.getElementById("my1Canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("lamo");
    ctx.drawImage(img,10,10);
}