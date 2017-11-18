const List = require('../index');

const assert = require('assert');

const list = new List(2);
describe('test to list with fix length', () => {
    it('should return every function', () => {
        for (const method in list) {
            if (method === '_len' || method === '_array') continue;
            assert(typeof list[method] === 'function');
        }
    });

    it('should fix the length', () => {
        list.push(0);
        list.push(1);
        list.push(2);
        assert(list._array.length === 2);
        assert.deepStrictEqual(list._array, [ 1, 2 ]);
    });

    it('should fix the length', () => {
        list.unshift(2);
        list.unshift(4);
        list.unshift(5);
        assert(list._array.length === 2);
        assert.deepStrictEqual(list._array, [ 5, 4 ]);
    });

    it('should fix the length', () => assert(list.get(1) === 4));
    it('should fix the length', () => {
        list.set(1, 0);
        assert(list.get(1, 0) === 0);
    });
});
