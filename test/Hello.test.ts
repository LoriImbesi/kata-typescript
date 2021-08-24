import { add, pythag, sub } from "../src/Hello";

const chai = require("chai");
const expect = chai.expect;

describe("Basic arithmetic", () => {
  it("can add two numbers", () => {
    let result = add(1,2);
    
    expect(result).equal(3)
  });

  it("can subtract two numbers", () => {
    let result = sub(5,2);
    
    expect(result).equal(3);
  });

  it("calculate hypotenuse", () => {
    let result = pythag(3,4);
    
    expect(result).equal(5);
  });
});
