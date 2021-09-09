
export enum Suit {
    HEARTS = 1,
    CLUBS = 2,
    SPADES = 3,
    DIAMONDS = 4

}

export enum Hand {
    HIGH_CARD = 0,
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

export interface RadiationReading {
    rads:number
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

export function detectHand(cards:Card[]) :Hand {
    let counts = countFaces(cards)
    let countOfPairs = Object.values(counts)
            .filter(num => num == 2)
            .length
    if (countOfPairs == 2) {
        return Hand.TWO_PAIR
    } else if (countOfPairs == 1) {
        return Hand.PAIR
    } else {
        return Hand.HIGH_CARD
    }
}

export function countFaces(cards:Card[]) :any  {
    return countBy(cards, card => card.face );
 }

 export function countSuits(cards:Card[]) :any  {
    return countBy(cards, card => card.suit );
 }

 export function countRads(readings:RadiationReading[]) :any {
    return countBy(readings, reading => reading.rads)
 }

 export function loriMap2(numbers:number[], mapFn: (num:number)=>number) :number[] {
     let output = [];
     for (let x = 0; x < numbers.length; x++) {
         output.push(mapFn(numbers[x]));
     }
     return output
 }

 export function loriMap(numbers:number[], mapFn: (num:number)=>number) :number[] {
     return numbers.map(mapFn)
 }

 export function countBy(items:any[], keyFn: (item:any)=>any ) :any {
    let values:number[] = items.map(keyFn)
    return values.reduce((counts:any, value) => {
        if (counts[value] > 0) {
            counts[value] += 1 
        } else {
            counts[value] = 1
        }
        return counts;
    }, {});
 }

// typescript transpiler (nodejs) (build-ts)

// test running
// build-ts(typescript -> javascript)
// nodejs(runs tests on generated javascript)

// website
// build-ts(typescript -> javascript)
// browser(runs generated javascript)