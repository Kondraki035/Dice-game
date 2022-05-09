var randomNum1 = Math.floor(Math.random() * 6) + 1;  // 1 - 6
console.log('dice Number is:' + randomNum1)

var diceChange = 'dice' + randomNum1 + '.png' //dice1.png - dice6.png

var randImgSrc = 'images/' + diceChange  //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

/*************************************************************************************************/

image1.setAttribute("src", randImgSrc);

var randomNum2 = Math.floor(Math.random() * 6) + 1;  // 1 - 6
console.log('dice Number is:' + randomNum2)

var diceChange1 = 'dice' + randomNum2 + '.png' //dice1.png - dice6.png

var randImgSrc1 = 'images/' + diceChange1  //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randImgSrc1);

/*************************************************************************************************/

// if statements 

if (randomNum1 > randomNum2) {
    document.querySelector('h1').innerHTML = '<em>Player 1 wins. 🚩</em>';
}
else if (randomNum1 < randomNum2) {
    document.querySelector('h1').innerHTML = '<em>Player 2 wins. 🚩</em>';
}
else {
    document.querySelector('h1').innerHTML = '<em>It is an Draw :) </em>';
}
