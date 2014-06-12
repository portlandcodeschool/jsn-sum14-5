

/*3) Cards Schmards

(Note: If you're fed up with the cards, you don't have to write all the methods. Just do a few to make sure you understand how to attach and call them in the constructor pattern.)

a) [Easy] Change your makeCard factory into a constructor named Card. If you've finished a version from Homework #4 which lives inside a module (IIFE), leave it as a module which returns constructor Card.

b) [Easy] The majority of the methods you've written for the cards (e.g. rank, suit, name, color...) are instance methods, called through each individual card instance. Implement each of those instance methods using Card's prototype, instead of linking them to each card. Make sure each method uses 'this' to refer to the card instance.

c) [Moderate] Include four class methods:

    cardID(rankNum,suitNum)
    cardRank(cardID)
    cardSuit(cardID)
    cardName(cardID)

These class methods should be attached to the constructor Card, which represents the whole 'class'. Notice that these class methods:

    can be called without having any card instances;
    need arguments, unlike the corresponding instance method.

The corresponding class and instance methods will have very similar code; try to share as much code between them as possible. If you're using an IIFE module, it can contain private helper functions useable by both Card and Card.prototype, or the prototype methods can make use of the class methods.*/
