import multi from "./multi.js";

export default function multiTest(){
    describe("multiply", function() {

        it("multiply 2 numbers", function() {
          chai.assert.equal(multi(2, 3), 6);
          chai.assert.equal(multi(3, 4), 12);
        });
      
        it("multiply 2 numbers. Some or both can be a string", function() {
            chai.assert.equal(multi('2', 3), 6);
            chai.assert.equal(multi(3, '4'), 12);
            chai.assert.equal(multi('23', '4'), 92);
        });
    });
}