
let check = document.getElementById("check")
let result = document.getElementById("result")
check.addEventListener("click", function () {
    checkAnswer()
})


function checkAnswer() {
    let count = 0
    let answer1 = "Loyalists from the US wanted an English territory"
    let answer2 = "Western Canada and Eastern Canada"
    let answer3 = "1931"
    let answer4 = "Quebec"
    let answer5 = "Fur"
    let userInput1 = document.querySelector('input[name="question1"]:checked').value
    let userInput2 = document.querySelector('input[name="question2"]:checked').value
    let userInput3 = document.querySelector('input[name="question3"]:checked').value
    let userInput4 = document.querySelector('input[name="question4"]:checked').value
    let userInput5 = document.querySelector('input[name="question5"]:checked').value

    if (userInput1 === answer1) { count++ }
    if (userInput2 === answer2) { count++ }
    if (userInput3 === answer3) { count++ }
    if (userInput4 === answer4) { count++ }
    if (userInput5 === answer5) { count++ }

    let text=count.toString

        result.innerHTML = count+"/"+5

    }
    





