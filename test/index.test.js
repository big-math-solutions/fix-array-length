const List = require('../index');

const assert = require('assert');

const list = new List(2);
describe('test to list with fix length', () => {
    it('should return every function', () => {
        for (const method in list) {
            if (method === '_len' || method === 'length') continue;
            assert(typeof list[method] === 'function');
        }
    });

    it('should fix the length in push', () => {
        list.push(0);
        list.push(1);
        list.push(2);
        assert(list.valueOf().length === 2);
        assert.deepStrictEqual(list.valueOf(), [ 1, 2 ]);
    });

    it('should fix the length in push recursive', () => {
        list.push(0, 1, 2, 3, 4);
        assert(list.valueOf().length === 2);
        assert.deepStrictEqual(list.valueOf(), [ 3, 4 ]);
    });

    it('should return the corret with slice', () => {
        list.push(0, 1, 2, 3, 4);
        assert(list.valueOf().length === 2);
        assert.deepStrictEqual(list.slice(1), [ 4 ]);
    });

    it('should return the corret with map', () => {
        list.push(0, 1, 2, 3, 4);
        assert(list.valueOf().length === 2);
        assert.deepStrictEqual(list.map((item) => item * item), [ 9, 16 ]);
    });

    it('should fix the length in unshift', () => {
        list.unshift(2);
        list.unshift(4);
        list.unshift(5);
        assert(list.valueOf().length === 2);
        assert.deepStrictEqual(list.valueOf(), [ 5, 4 ]);
    });

    it('should fix the length in unshift recursive', () => {
        list.unshift(2);
        list.unshift(4);
        list.unshift(5);
        assert(list.valueOf().length === 2);
        assert.deepStrictEqual(list.valueOf(), [ 5, 4 ]);
    });

    it('should fix the length in concat', () => {
        list.concat([ 1, 2, 3, 4, 4, 5, 6, 7, 8 ]);
        assert(list.valueOf().length === 2);
        assert.deepStrictEqual(list.valueOf(), [ 7, 8 ]);
    });

    it('should return the element with get', () => assert(list.get(1) === 8));
    it('should set the element with set method', () => {
        list.set(1, 0);
        assert(list.get(1, 0) === 0);
    });
});
