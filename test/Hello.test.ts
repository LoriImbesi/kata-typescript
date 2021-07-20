import { add } from "../src/Hello";

const chai = require("chai");
const expect = chai.expect;

describe("Say hello", () => {
  it("should display message", () => {
    let result = add(1,2);
    
    expect(result).equal(3)
  });

});
