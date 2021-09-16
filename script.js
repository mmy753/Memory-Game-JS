document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'CSharp',
            img: 'images/CSharp.png'
        },
        {
            name: 'CSharp',
            img: 'images/CSharp.png'
        },
        {
            name: 'js',
            img: 'images/js.png'
        },
        {
            name: 'js',
            img: 'images/js.png'
        },
        {
            name: 'NodeJS',
            img: 'images/NodeJS.png'
        },
        {
            name: 'NodeJS',
            img: 'images/NodeJS.png'
        },
        {
            name: 'Python',
            img: 'images/Python.png'
        },
        {
            name: 'Python',
            img: 'images/Python.png'
        }

    ]
 cardArray.sort(() => 0.5 - Math.random())
 
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() {
    for (let i = 0; i<cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
function checkforMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
    else if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Try Again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations!'
    }
}
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkforMatch, 500)
    }
}
createBoard();
})