import sum from './sum.js';

const assert = chai.assert;

export default function sumTest(){
    describe("sum", function() {

        it("sum 2 numbers", function() {
          assert.equal(sum(2, 3), 5);
          assert.equal(sum(3, 4), 7);
        });
      
        it("sum 2 numbers. First is a string", function() {
            assert.equal(sum('2', 3), 5);
        });

        it("sum 2 numbers. Second is a string", function() {
            assert.equal(sum(3, '4'), 7);
        });
        
        it("sum 2 numbers. Both are strings", function() {
            assert.equal(sum('23', '4'), 27);
        });  
    });
}
