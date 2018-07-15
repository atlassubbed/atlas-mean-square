const { describe, it } = require("mocha")
const { expect } = require("chai")
const meanSquare = require("../src/mean-square")

describe("meanSquare", function(){
  it("should calculate the square of the root mean square of the array", function(){
    expect(meanSquare([-2,2])).to.equal(4)
  })
})
