import { quotes } from "./quotes.js";

const body = document.getElementById("body");

const image = document.getElementById("image");
const quote = document.getElementById("quote");
const cite = document.getElementById("cite");

let currentQuote = null;

body.onload = function() {
    setNextQuote();

    document.getElementById("next-button").addEventListener("click", function() {
        setNextQuote();
    });
}

function pickOneQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    return randomQuote;
}

function setNextQuote() {
    let quoteObj = pickOneQuote();
    if (quotes.length > 1 && quoteObj === currentQuote){
        setNextQuote();
        return;
    }
    currentQuote = quoteObj;
    image.src = quoteObj.image;
    quote.textContent = quoteObj.quote;
    cite.textContent = quoteObj.name;
}