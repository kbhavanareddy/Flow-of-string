
var leftIn = document.getElementById("left")
var rightIn = document.getElementById("right")
var startBtn = document.getElementById("start")
var stopBtn = document.getElementById("pause")
var backBtn = document.getElementById("back")

var leftValue
var rightValue
var leftLoop
var rightLoop

stopBtn.onclick = function() {
    clearInterval(leftLoop);
    clearInterval(rightLoop);
};

startBtn.onclick = function(){
    clearInterval(leftLoop);
    clearInterval(rightLoop);

    leftValue = leftIn.value;
    rightValue = rightIn.value;

    leftLoop = setInterval(function () {
        var left1 = leftValue.length;

            if(left1!= 0) {
                rightValue = rightValue + leftValue.slice (0,1);
                leftValue = leftValue.slice(1,left1);

                rightIn.value = rightValue;
                leftIn.value = leftValue;
            }
            else {
                clearInterval(leftLoop);
            }
    },1000);
};


backBtn.onclick = function () {

    clearInterval(leftLoop);
    clearInterval(rightLoop);
  
    leftValue = leftIn.value;
    rightValue = rightIn.value;

    rightLoop = setInterval(function () {
        var right1 = rightValue.length;
        if (right1 !== 0) {
            
            leftValue = rightValue.slice(right1 - 1, right1) + leftValue;
         
            rightValue = rightValue.slice(0, right1 - 1);
           
            rightIn.value = rightValue;
            leftIn.value = leftValue;
        } else {
            clearInterval(rightLoop);
        }
    }, 1000);
};
