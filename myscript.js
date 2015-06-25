


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