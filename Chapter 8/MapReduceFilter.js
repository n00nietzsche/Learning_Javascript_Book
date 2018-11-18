
// It was about Map Method in Array

// const cart = [{name:"Widget", price: 9.95}, {name:"Gadget", price: 22.95}];
// const names = cart.map(x => x.name);
// const prices = cart.map(x => x.price);
// const discountPrices = prices.map( x => x*0.8);

// console.log(cart);
// console.log(names);
// console.log(prices);
// console.log(discountPrices);

// const items = ["Widget", "Gadget"];
// const prices = [9.95, 22.95];
// const cart = items.map((x, i) => ({ name:x, prices: prices[i]}));

// console.log(cart);


// const cards = [];
// for(let suit of ['H', 'C', 'D', 'S']) // heart, clover, diamond, spade
//     for(let value=1; value<=13; value++)
//         cards.push({suit, value});

// // console.log(cards.filter(x => x.value === 2));
// // console.log(cards.filter(x => x.suit === 'D'));
// // console.log(cards.filter(x => x.value > 10));

// function cardToString(c){
//     const suits = {'H' : '\u2665', 'C': '\u2663', 'D':'\u2666', 'S':'\u2660'};
//     const values = { 1:'A', 11:'J', 12:'Q', 13:'K'};
//     // It is not a efficient way to make variables everytime i call this function.
    
//     for(let i=2; i<=10; i++) values[i] = i;
//     return values[c.value] + suits[c.suit];
// }

// console.log(
// cards.filter(c => c.value === 2)
//      .map(cardToString)
// );

const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => x *= a, 10);

console.log(sum);
