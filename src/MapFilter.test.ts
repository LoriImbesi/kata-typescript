import { Suit, Hand, parseCard, parseCards  } from "../src/PokerKata";

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

it ("cubes and filters odds", () => {
  let result = [1,2,3,4,5].filter(num => num % 2 !== 0).map(num => num * num);
  expect(result).to.deep.equal([1, 9, 25])
});

it ("square and return > 10", () => {
  let result = [1,2,3,4,5].map(num => num * num).filter(num => num > 10);
  expect(result).to.deep.equal([16, 25])
});


  it("odds only with extra", () => {
    let result = [1,2,3,4].filter(num => num % 2 !== 0).map(num => num + ":odd")

    expect(result).to.deep.equal(["1:odd", "3:odd"])
  });

  it("steve only", () => {
    let isSteve = (x:string) => x === "steve";

    let result = ["steve", "steve", "lori"].filter(isSteve);

    expect(result).to.deep.equal(["steve", "steve"])
  });

  it("evens only", () => {
    let result = [1,2,3,4].filter(num => num % 2 === 0);

    expect(result).to.deep.equal([2, 4])
  });

  it("odd or even", () => {
    let result = [1,2,3,4].map(num => {
      if (num%2 === 0) {
        return num + ":even";
      } else {
        return num + ":odd"
      }
    });

    expect(result).to.deep.equal(["1:odd", "2:even", "3:odd", "4:even"])
  });

  it("cube", () => {
    let result = [1,2,3].map(num => num * num * num);

    expect(result).to.deep.equal([1,8,27])
  });

  it("square", () => {
    let squareNum = (num:number) => num * num
    let result = [1,2,3].map(squareNum)

    expect(result).to.deep.equal([1,4,9])
  });

  it("say hello", () => {
    let helloInitial = (x:string) => ("Hello " + x[0])
    let result = ["Steve", "Lori"].map(helloInitial);

    expect(result).to.deep.equal(["Hello S", "Hello L"])
  });

  it("lower case names", () => {
    let result = ["Steve", "Lori"].map(name => name.toLowerCase());

    expect(result).to.deep.equal(["steve", "lori"])
  });

  // =>    function   "big arrow"   lambda  
  it("can count length of names 2 ", () => {
    // string => string
    let appendLength = (name:string) => name + ":" + name.length
    let result = ["Steve", "Lori"].map(appendLength);

    expect(result).to.deep.equal(["Steve:5", "Lori:4"])
  });

  it("will put index into name", () => {
    let result = ["Steve", "Lori"].map((name,index) => name + ":" + index)

    expect(result).to.deep.equal(["Steve:0", "Lori:1"])
  });

  it("can count length of names", () => {
    let result = ["Steve", "Lori"].map(name => name + ":" + name.length);

    expect(result).to.deep.equal(["Steve:5", "Lori:4"])
  });

  it("can take first letter", () => {
    let result = ["Steve", "Lori"].map(name => name[0]);

    expect(result).to.deep.equal(["S", "L"])
  });

  it("can decrement integers", () => {
    let result = [1,2,3,4,5].map(x => x - 1) //

    expect(result).to.deep.equal([0,1,2,3,4])
  });
  

  it("can increment integers", () => {
    let result = [1,2,3,4,5].map(x => x + 1);

    expect(result).to.deep.equal([2,3,4,5,6])
  });
  
  it("can parse face and suit for three cards", () => {
    let result = parseCards(["3H", "4D", "5D"]);
    
   // expect(result.suit).equal(Suit.HEARTS)
    //expect(result.face).equal(3)
    //expect(result.suit).equal(Suit.DIAMONDS)
    //expect(result.face).equal(4)
    //expect(result.suit).equal(Suit.DIAMONDS)
    //expect(result.face).equal(5)

  });


});
