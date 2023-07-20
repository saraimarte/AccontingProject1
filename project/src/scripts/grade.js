var gradeButton = document.getElementById("btn");
var displayWhenGraded = document.getElementById("displayWhenGraded");
var rightCountDisplay = document.getElementById("rightCount");
var wrongCountDisplay = document.getElementById("wrongCount");
var dragParent = document.getElementById("dragparent");
var allNodes = dragParent.querySelectorAll(".activity");
console.log(allNodes.length);

function notDone(){
    alert("Opps! You did not finish the task!");
}

gradeButton.addEventListener("click", ()=> {
    var allNodes = dragParent.querySelectorAll(".activity");
   
    if(allNodes.length <= 0){
        console.log(allNodes.length);
        console.log("This can be graded!");
        displayWhenGraded.style.display = "flex";
        var rightCount = 0;
        var wrongCount = 0;
        var box1 = document.getElementById("box1");
        var yesArray = box1.getElementsByClassName("Yes");
        var noArray = box1.getElementsByClassName("No");
        //for (var counter = 0; counter < yesArray.length; counter++) {
        // yesArray[counter].style.border = "3px solid green";
        //}
        for (var counter = 0; counter < noArray.length; counter++) {
            noArray[counter].style.border = "3px solid red";
        }
        var yesCount = yesArray.length;
        var noCount = noArray.length;
        console.log(box1.childNodes);
        //console.log("Yes count:", yesCount); 
        // console.log("No count:", noCount); 
        rightCount += yesCount;
        wrongCount += noCount;
        console.log("Right Answers:", rightCount);
        console.log("Wrong Answers:", wrongCount);
        //Box 2
        var box2 = document.getElementById("box2");
        var yesArray = box2.getElementsByClassName("Yes");
        var noArray = box2.getElementsByClassName("No");
        for (var counter = 0; counter < yesArray.length; counter++) {
            yesArray[counter].style.border = "3px solid red";
        }
        // for (var counter = 0; counter < noArray.length; counter++) {
            // noArray[counter].style.border = "3px solid green";
        //}
        yesCount = yesArray.length;
        noCount = noArray.length;
        console.log(box2.childNodes);
        //console.log("Yes count:", yesCount); 
        //console.log("No count:", noCount); 
        rightCount += noCount;
        wrongCount += yesCount;
        console.log("Right Answers:", rightCount);
        console.log("Wrong Answers:", wrongCount);
        
        rightCountDisplay.textContent = rightCount;
        wrongCountDisplay.textContent = wrongCount;
        
        
        if (wrongCount === 0) {
            gradeButton.textContent = "Great, Play Again!";
            gradeButton.addEventListener("click", function() {
            window.location.reload();
        
            })
        
        } else {
            gradeButton.textContent = "Grade Again!"
        }

    }else{
        console.log(allNodes.length);
        console.log("Can't be graded!");
        alert("Finish your work!")
    }
});

  














