document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    { name: 'polar', img: 'images/polar.jpg' },
    { name: 'polar', img: 'images/polar.jpg' },
    { name: 'gatito', img: 'images/gatito.jpg' },
    { name: 'gatito', img: 'images/gatito.jpg' },
    { name: 'perrito', img: 'images/perrito.jpeg' },
    { name: 'perrito', img: 'images/perrito.jpeg' },
    { name: 'hamburguer', img: 'images/hamburguer.jpg' },
    { name: 'hamburguer', img: 'images/hamburguer.jpg' },
    { name: 'helado', img: 'images/helado.jpg' },
    { name: 'helado', img: 'images/helado.jpg' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'pizza', img: 'images/pizza.png' }, 
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard); // Activar el evento click
      grid.appendChild(card);
    }
    // grid.style.width = (cardArray.length / 6) * 100 + 'px';
		// grid.style.height = (cardArray.length / 6) * 100 + 'px';
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/fondo.jpg');
      cards[optionTwoId].setAttribute('src', 'images/fondo.jpg');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length == cardArray.length/2) {
    	resultDisplay.textContent = 'Congratulations! You found them all!'

    }
  }

  function flipCard() {
    const cardId = this.getAttribute('data-id'); // Corrección de getAttribute
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});