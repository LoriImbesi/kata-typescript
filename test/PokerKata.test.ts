import { Suit, Hand, parseCard, parseCards, countFaces, countSuits, countRads, loriMap, detectHand  } from "../src/PokerKata";

const chai = require("chai");
const expect = chai.expect;

describe("Parsing strings", () => {
//   it("can determine which poker hand is given", () => {
//     let result = parseHand("3H", "5D", "4D", "3D", "8S");
    
//     expect(result).equal(Hand.PAIR)
//   });

  it("can parse face and suit for single card", () => {
      let result = parseCard("3H");
      
      expect(result.suit).equal(Suit.HEARTS)
      expect(result.face).equal(3)

  });

  it("can parse face and suit for single card", () => {
    let result = parseCard("5S");
    
    expect(result.suit).equal(Suit.SPADES)
    expect(result.face).equal(5)

  });

  it("can parse face and suit for three cards", () => {
    let result = parseCards(["3H", "4D", "5D"]);
    
    expect(result[0].suit).equal(Suit.HEARTS)
    expect(result[0].face).equal(3)
    expect(result[1].suit).equal(Suit.DIAMONDS)
    expect(result[1].face).equal(4)
    expect(result[2].suit).equal(Suit.DIAMONDS)
    expect(result[2].face).equal(5)

  });

  it("can detect two pair", () => {
    let cards = [{suit:Suit.HEARTS, face:3},
      {suit:Suit.SPADES, face:3},
      {suit:Suit.DIAMONDS, face:5},
      {suit:Suit.HEARTS, face:5},
      {suit:Suit.HEARTS, face:4}
    ]
    let hand = detectHand(cards);

    expect(hand).equal(Hand.TWO_PAIR)
  });


  it("can detect single pair", () => {
    let cards = [{suit:Suit.HEARTS, face:3},
      {suit:Suit.SPADES, face:3},
      {suit:Suit.DIAMONDS, face:5},
      {suit:Suit.HEARTS, face:8},
      {suit:Suit.HEARTS, face:4}
    ]
    let hand = detectHand(cards);

    expect(hand).equal(Hand.PAIR)
  });

  it("can count faces", () => {
    let cards = [{suit:Suit.HEARTS, face:3},
      {suit:Suit.SPADES, face:3},
      {suit:Suit.DIAMONDS, face:4},
      {suit:Suit.HEARTS, face:8},
      {suit:Suit.HEARTS, face:4}
    ]
    let result = countFaces(cards);

    expect(result).to.deep.equal({3: 2, 4: 2, 8: 1})
  });

  it ("homemade map function", () => {
    let r1 = loriMap([3, 8, 4], num => num + 2);
    expect(r1).to.deep.equal([5, 10, 6])


    let r2 = loriMap([1,2,3], num => num);
    expect(r2).to.deep.equal([1,2,3])

  });



  it("can count rad levels", () => {
    let readings = [{rads: 44},
      {rads: 44},
      {rads: 10}
    ]
    let result = countRads(readings);
    // {key: value, key1: value2, key2:value2}
    expect(result).to.deep.equal({44: 2, 10: 1})
  });

  it("can count suits", () => {
    let cards = [{suit:Suit.HEARTS, face:3},
      {suit:Suit.SPADES, face:3},
      {suit:Suit.DIAMONDS, face:4},
      {suit:Suit.HEARTS, face:8},
      {suit:Suit.HEARTS, face:4}
    ]
    let result = countSuits(cards);
    // {key: value, key1: value2, key2:value2}
    expect(result).to.deep.equal({[Suit.SPADES]: 1, [Suit.DIAMONDS]: 1, [Suit.HEARTS]: 3})
  });

  it ("counts by key", () => {
    // T[] -> ((A, T) -> A) -> A

    let r1 = [3, 8, 4].map(num => num + 2);
    expect(r1).to.deep.equal([5, 10, 6])


    let r4 = [3, 8, 4, 5].filter(num => num %2 !== 0).map(num => "test:" + num)
    expect(r4).to.deep.equal(["test:3", "test:5"])

    let r = [3, 3, 3, 8, 4].reduce((total,next) => total+next, 0)
    expect(r).equal(21)

    let r2 = ["Steve", "Lori"].reduce((total,next) => total+","+next, "")
    expect(r2).equal(",Steve,Lori")

    let r3 = ['Steve', 'Lori', 'Steve'].reduce((counts,name) => { 
      if (counts[name] > 0) {
        counts[name] += 1 // {'Steve': 2, 'Lori': 1}
      } else {
        counts[name] = 1 
      }
      return counts; 
    }, {})
    expect(r3).to.deep.equal({'Steve': 2, 'Lori': 1})
  });

 it ("extracts names and concats", () => {
   // array creation              |  ['horse'] 
   // array indexing              |  array[0]
   // array indexing by variable  |  array[index]
   // array setting               |  array[0] = 'steve'

   // object creation             |  { name: 'horse'}
   // object creation by variable |  { [keyVariable]: 'horse'}
   // object indexing             |  obj.name
   // object indexing by variable |  obj[keyVariable]
   // object setting              |  obj.name = 'steve'
   let input = [{first: "Steve", last: "Shogren"},{first: "Lori", last: "Imbesi"}]
   let result = input.reduce((listOfNames, person) => {
     return listOfNames + person.first + " " + person.last + ", ";
   }, "")

   let expected = "Steve Shogren, Lori Imbesi, "
   expect(result).to.deep.equal(expected)
 });

});


// it ("cubes and filters odds", () => {
//   let result = [1,2,3,4,5].filter(num => num % 2 !== 0).map(num => num * num);
//   expect(result).to.deep.equal([1, 9, 25])
// });

// it ("square and return > 10", () => {
//   let result = [1,2,3,4,5].map(num => num * num).filter(num => num > 10);
//   expect(result).to.deep.equal([16, 25])
// });


//   it("odds only with extra", () => {
//     let result = [1,2,3,4].filter(num => num % 2 !== 0).map(num => num + ":odd")

//     expect(result).to.deep.equal(["1:odd", "3:odd"])
//   });

//   it("steve only", () => {
//     let isSteve = (x:string) => x === "steve";

//     let result = ["steve", "steve", "lori"].filter(isSteve);

//     expect(result).to.deep.equal(["steve", "steve"])
//   });

//   it("evens only", () => {
//     let result = [1,2,3,4].filter(num => num % 2 === 0);

//     expect(result).to.deep.equal([2, 4])
//   });

//   it("odd or even", () => {
//     let result = [1,2,3,4].map(num => {
//       if (num%2 === 0) {
//         return num + ":even";
//       } else {
//         return num + ":odd"
//       }
//     });

//     expect(result).to.deep.equal(["1:odd", "2:even", "3:odd", "4:even"])
//   });

//   it("cube", () => {
//     let result = [1,2,3].map(num => num * num * num);

//     expect(result).to.deep.equal([1,8,27])
//   });

//   it("square", () => {
//     let squareNum = (num:number) => num * num
//     let result = [1,2,3].map(squareNum)

//     expect(result).to.deep.equal([1,4,9])
//   });

//   it("say hello", () => {
//     let helloInitial = (x:string) => ("Hello " + x[0])
//     let result = ["Steve", "Lori"].map(helloInitial);

//     expect(result).to.deep.equal(["Hello S", "Hello L"])
//   });

//   it("lower case names", () => {
//     let result = ["Steve", "Lori"].map(name => name.toLowerCase());

//     expect(result).to.deep.equal(["steve", "lori"])
//   });

//   // =>    function   "big arrow"   lambda  
//   it("can count length of names 2 ", () => {
//     // string => string
//     let appendLength = (name:string) => name + ":" + name.length
//     let result = ["Steve", "Lori"].map(appendLength);

//     expect(result).to.deep.equal(["Steve:5", "Lori:4"])
//   });

//   it("will put index into name", () => {
//     let result = ["Steve", "Lori"].map((name,index) => name + ":" + index)

//     expect(result).to.deep.equal(["Steve:0", "Lori:1"])
//   });

//   it("can count length of names", () => {
//     let result = ["Steve", "Lori"].map(name => name + ":" + name.length);

//     expect(result).to.deep.equal(["Steve:5", "Lori:4"])
//   });

//   it("can take first letter", () => {
//     let result = ["Steve", "Lori"].map(name => name[0]);

//     expect(result).to.deep.equal(["S", "L"])
//   });

//   it("can decrement integers", () => {
//     let result = [1,2,3,4,5].map(x => x - 1) //

//     expect(result).to.deep.equal([0,1,2,3,4])
//   });
  

  // it("can increment integers", () => {
  //   let result = [1,2,3,4,5].map(x => x + 1);

  //   expect(result).to.deep.equal([2,3,4,5,6])
  // });
  




// function Card(HEARTS: Suit, arg1: number): any {
//   throw new Error("Function not implemented.");
// }

