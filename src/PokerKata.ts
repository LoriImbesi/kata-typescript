
export enum Suit {
    HEARTS = 1,
    CLUBS = 2,
    SPADES = 3,
    DIAMONDS = 4

}

export enum Hand {
    PAIR = 1,
    TWO_PAIR = 2,
    THREE_OF_A_KIND = 3,
    FLUSH = 4,
    FOUR_OF_A_KIND = 5,
    FULL_HOUSE = 6,
    STRAIGHT = 7,
    STRAIGHT_FLUSH = 8,
    ROYAL_FLUSH = 9
}

export interface Card {
    suit:Suit
    face:number
}

export function parseCard(card:string):Card {
    let parseSuit = Suit.HEARTS
    let face = 0

    if (card[1]==="S"){
        parseSuit = Suit.SPADES
    } 
    if (card[1]==="H"){
        parseSuit = Suit.HEARTS
    } 
    if (card[1]==="D"){
        parseSuit = Suit.DIAMONDS
    }
    if (card[0]=== "3"){
        face = 3
    } 
    if (card[0] === "4"){
        face = 4
    } 
    if (card[0] === "5"){
        face = 5
    }
    
    return {suit:parseSuit, face:face}
}

// SEQUENCE ABSTRACTIONS
// map     :: T[].map(T => A) : A[]
// map     :: string[].map(string => Card) : Card[]
// filter*
// reduce/fold 
export function parseCards(cardStrings:string[]):Card[] {
    return cardStrings.map(parseCard);
}