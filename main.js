const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];
const lvls = {
    "Easy": 7,
    "Normal": 5,
    "Hard": 2
};
document.querySelector(".total").innerHTML = words.length;
let defaultLevelName = "Normal";
let defaultLevelSeconds = lvls[defaultLevelName];
let upcomingWords = document.querySelector(".upcoming-words");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .sec");
let timeLeftSpan = document.querySelector(".time span");
let input = document.querySelector(".input");
let theWord = document.querySelector(".word");
let scoreGot = document.querySelector(".score .got");
let finishMessage = document.querySelector(".finish");
input.onpaste = function () {
    return false;
}
timeLeftSpan.innerHTML = defaultLevelSeconds;
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
document.querySelector(".start").addEventListener("click", ()=>{
    input.focus();
    document.querySelector(".start").style.display = "none";
    document.querySelector(".word").innerHTML = getWord(); 
});
function getWord(){
    let random = Math.floor(Math.random() * words.length);
    words.splice(words.indexOf(random) , 1);
    upcomingWords.innerHTML = " "; 
    for (let index = 0; index < words.length; index++) {
        let span = document.createElement("span");
        let text = document.createTextNode(words[index]);
        span.appendChild(text);
        span.className = "box";
        upcomingWords.appendChild(span);
    }
    startPlay();
    return words[random];
}
function startPlay(){
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            clearInterval(start);
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    document.querySelector(".word").innerHTML = getWord(); 
                } else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spanText = document.createTextNode("Congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    upcomingWords.remove();
                }
            } else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
}