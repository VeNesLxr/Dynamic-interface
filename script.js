const paragraph= document.getElementById("paragraph");
const textBox= document.getElementById("textBox");
const clickMe = document.getElementById("clickMeButton");
const content = document.getElementById("content");
const textBox2 = document.getElementById("textBox2");
const button2 = document.getElementById("button2");
const buttonRemove = document.getElementById("buttonRemove")

function writeText() {
    paragraph.innerText = textBox.value;

}
clickMeButton.addEventListener("click", writeText);

function addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = textBox2.value;
    newParagraph.className= "nice";
    content.appendChild(newParagraph);
}
button2.addEventListener("click", addParagraph);

function removePara() {
    const paragraphs= document.getElementsByClassName("nice");
    if (paragraphs.length > 0){
        const lastPos=paragraphs.length-1;
        content.removeChild(paragraphs[lastPos]);
    }
}

buttonRemove.addEventListener("click",removePara);