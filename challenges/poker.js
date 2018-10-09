/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 *
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  function cardRank(arr) {
    // declare variable and check for 4-of-a-kind or 1-pair
    const cardTracker = {};

    for (let i = 0; i < arr.length; i += 1) {
      if (!cardTracker.hasOwnProperty (arr[i])) {
        cardTracker[arr[i]] = 1;
      } else {
        cardTracker[arr[i]] += 1;
      }
    }
    // check if the arr is straight or no
    let straight = null;
    if ((Math.max(arr) - Math.min(arr)) === 4) {
      straight = true;
    }
    // 3 value type point and highcard point ( equal to the value of the highest repeated car or )
    let typePoint = 0;
    let highestValueAndRepeatedCard;
    const cardNumber = Object.keys(cardTracker).length;
    const highestCountNumber = Object.keys(cardTracker).reduce((highestCount, card) => {
      if (highestCount <= Number(cardTracker[card])) {
        if (!highestValueAndRepeatedCard || highestValueAndRepeatedCard < card) {
          highestValueAndRepeatedCard = Number(card);
        }
        return Number(cardTracker[card]);
      }
      return highestCount;
    }, 1);
    if (highestCountNumber === 2) typePoint = 300;
    if (highestCountNumber === 2 && cardNumber === 4) typePoint = 200;
    if (highestCountNumber === 3) typePoint = 400;
    if (straight) typePoint = 500;
    if (highestCountNumber === 3 && cardNumber === 2) typePoint = 600;
    if (highestCountNumber === 4) typePoint = 700;
    return typePoint + highestValueAndRepeatedCard;
  }
  if (cardRank(hand1) > cardRank(hand2)) {
    return 'Player 1 wins';
  } if (cardRank(hand2) > cardRank(hand1)) {
    return 'Player 2 wins';
  }
  return 'Draw';
}
const result = poker([3, 5, 5, 5, 2], [4, 6, 7, 8, 8]);
console.log (result);


module.exports = poker;
