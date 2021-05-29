//variables
var in1 = document.getElementById('inpt1'),
    in2 = document.getElementById('inpt2'),
    in3 = document.getElementById('inpt3'),
    in4 = document.getElementById('inpt4'),
    val1 = document.getElementById('value1'),
    val2 = document.getElementById('value2'),
    val3 = document.getElementById('value3'),
    val4 = document.getElementById('value4'),
    clr1 = document.getElementById('color1'),
    clr2 = document.getElementById('color2'),
    clr3 = document.getElementById('color3'),
    clr4 = document.getElementById('color4'),
    chek1 = document.getElementById('chk1'),
    chek2 = document.getElementById('chk2'),
    chek3 = document.getElementById('chk3'),
    chek4 = document.getElementById('chk4');
var flag = true;
var count;


//onclick button function
document.getElementById("btn1").onclick = function() {
    //check empty
    // resetDivStyle_text();
    testEmpty();

    var myCanv = document.getElementById('myCanvas');
    var ctx = myCanv.getContext("2d");
    var data = [parseInt(val1.value), parseInt(val2.value), parseInt(val3.value), parseInt(val4.value)];
    var colors = [clr1.value, clr2.value, clr3.value, clr4.value];
    console.log("*******" + data[1]);
    //calculate total
    for (var i = 0; i < 4; i++) {
        total += data[i];
    }
    if (chek1.checked) {
        document.getElementById('pieCanv').innerText = drawPie();
    } else {
        //  ctx.clearRect(0, 0, myCanv.Width, myCanv.height);
    }
    if (chek2.checked) {
        document.getElementById('doughCanv').innerText = drawDoughnut();
    } else {
        //  ctx.clearRect(0, 0, myCanv.clientWidth, myCanv.height);
    }

    function drawPie() {
        //variables
        var x = 100,
            y = 100,
            radius = 100,
            startpoint = 0,
            endpoint,
            percent;
        //draw
        for (var i = 0; i < 4; i++) {
            percent = data[i] * 100 / total;
            //calculate endpoint
            endpoint = startpoint + (2 / 100 * percent);
            ctx.beginPath();
            //Fill color
            ctx.fillStyle = colors[i];
            ctx.moveTo(x, y);
            ctx.arc(x, y, radius, startpoint * Math.PI, endpoint * Math.PI);
            ctx.fill();
            startpoint = endpoint;
        }
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Pie Chart", 70, 225);
    }

    function drawDoughnut() {
        var w = 350,
            z = 100,
            radius2 = 100,
            startpoint = 0;
        for (var i = 0; i < 4; i++) {
            var percent = data[i] * 100 / total;
            //calculate endpoint
            var endpoint = startpoint + (2 / 100 * percent);
            ctx.beginPath();
            //Fill color
            ctx.fillStyle = colors[i];
            ctx.moveTo(w, z);
            ctx.arc(w, z, radius2, startpoint * Math.PI, endpoint * Math.PI);
            ctx.fill();
            startpoint = endpoint;
        }
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(w, z, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Doughnut Chart", 300, 225);
    }

}


function testEmpty() {
    if (in1.value == "" || in2.value == "" || in3.value == "" || in4.value == "" || val1.value == "" || val2.value == "" || val3.value == "" || val4.value == "") {
        alert = " input don't allow to be empty and must have a value.";
        flag = true;
    }
    if (chek1.checked == false && chek2.checked == false && chek3.checked == false && chek4.checked == false) {
        alert = "You must choose atleast one chart.";
    }
}
/*
    if (in1.value == "") {
        document.getElementById('empty').innerText += "1st Data input don't allow to be empty and must start with alphabet letter. \n";
        flag = true;
    }
    if (in2.value == "") {
        document.getElementById('empty').innerText += "2nd Data input don't allow to be empty and must start with alphabet letter. \n";
        flag = true;
    }
    if (in3.value == "") {
        document.getElementById('empty').innerText += "3rd Data input don't allow to be empty and must start with alphabet letter. \n";
        flag = true;
    }
    if (in4.value == "") {
        document.getElementById('empty').innerText += "4th Data input don't allow to be empty and must start with alphabet letter. \n";
        flag = true;
    }
    if (val1.value == "") {
        document.getElementById('empty').innerText += "1st Data input don't allow to be empty and must be greater than zero.  \n";
        flag = true;
    }
    if (val2.value == "") {
        document.getElementById('empty').innerText += "2nd Data input don't allow to be empty and must be greater than zero. \n";
        flag = true;
    }
    if (val3.value == "") {
        document.getElementById('empty').innerText += "3rd Data input don't allow to be empty and must be greater than zero. \n";
        flag = true;
    }
    if (val4.value == "") {
        document.getElementById('empty').innerText += "4th Data input don't allow to be empty and must be greater than zero. \n";
        flag = true;
    }
    if (chek1.checked == false && chek2.checked == false && chek3.checked == false && chek4.checked == false) {
        document.getElementById('empty').innerText += "You must choose atleast one chart."
        flag = true;
    }

    if (flag) {
        setDivStyle();
    } else {
        resetDivStyle_text();
    }

}

function setDivStyle() {
    document.getElementById('empty').style.color = 'rgb(68, 3, 3)';
    document.getElementById('empty').style.backgroundColor = 'rgb(245, 153, 153)';
    document.getElementById('empty').style.border = '1px solid red';
    document.getElementById('empty').style.margin = '10px auto';
}

function resetDivStyle_text() {
    document.getElementById('empty').style.color = 'white';
    document.getElementById('empty').style.backgroundColor = 'white';
    document.getElementById('empty').style.border = '1px solid white';
    document.getElementById('empty').style.margin = '10px auto';
    document.getElementById('empty').innerText = "";

}*/