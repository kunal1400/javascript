
let deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
/**
 * Here we get console because of arrow function. Arrow function does not have its own this, so it will take this from its parent.
 */
let cardPicker1 = deck1.createCardPicker();
console.log(cardPicker1()); //{suit: "hearts", card: 9}


let deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
/**
 * Here we get undefined because of function. Function has its own this, so it will not take this from its parent.
 */
let cardPicker2 = deck2.createCardPicker();
console.log(cardPicker2());