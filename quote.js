var quote = document.getElementById("quotes");
var generate = document.getElementById("generate");
const quotes = [
    "The purpose of our lives is to be happy",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Never let the fear of striking out keep you from playing the game.",
    "Not how long, but how well you have lived is the main thing.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    "In order to write about life first you must live it.",
    "The big lesson in life, baby, is never be scared of anyone or anything.",
    "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
    "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    "Life is not a problem to be solved, but a reality to be experienced.",
    "Never give up",
    "The unexamined life is not worth living.",
    "Turn your wounds into wisdom.",
    "The way I see it, if you want the rainbow, you gotta put up with the rain",
    "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.",
    "Don’t settle for what life gives you; make life better and build something.",
    "Everything negative – pressure, challenges – is all an opportunity for me to rise",
    "I like criticism. It makes you strong",
    "Life is really simple, but men insist on making it complicated.",
    "My mama always said, life is like a box of chocolates. You never know what you’re gonna get.",
]


var fun = function generates(array){
     const  randomItem = Math.floor(Math.random()*array.length)
     const item = array[randomItem];
    return item
}




generate.addEventListener("click", function(){
    quote.innerHTML = fun(quotes);
    
})