





function generateQuote() {


var quoteOutput = document.getElementById("quoteOutput")
var nameQuote = document.getElementById("nameQuote")

var quotes = [


    {
        quoteOutput : "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        nameQuote : "― ― Oscar Wilde"
},
    {
        quoteOutput : "“It is better to be hated for what you are than to be loved for what you are not.”",
        nameQuote : " ― ― Andre Gide"
},
    {
        quoteOutput : "“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
        nameQuote : "― ― J.K. Rowling"
},
    {
        quoteOutput : "“Good friends, good books, and a sleepy conscience: this is the ideal life”",
        nameQuote : "― ―  Mark Twain"
},
 
    {
        quoteOutput : "“We are all in the gutter, but some of us are looking at the stars.”",
        nameQuote : "― ― Oscar Wilde"
},
    {
        quoteOutput : "“Life is what happens to us while we are making other plans.”",
        nameQuote : "― ― Allen Saunders"
},



]

var randomNumber = Math.floor(Math.random() * quotes.length )

while (randomNumber == lastRandom) {
 randomNumber = Math.floor(Math.random() * quotes.length )
}

quoteOutput.innerText = quotes[randomNumber].quoteOutput;
nameQuote.innerText = quotes[randomNumber].nameQuote;

lastRandom = randomNumber

}


var lastRandom = -1


