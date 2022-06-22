import sumTest from './sum.test.js';
import multiTest from './multi.test.js'

mocha.setup('bdd'); 

sumTest();
multiTest();

mocha.run();