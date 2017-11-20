# fix-array-length
list or array with fix length, the loop is iterated to maintain the length of array.
node > 6 is required.
# install 

```bash

npm install --save fix-array-length
```

#usage

```js
list = FixArrayLength(2)
list.push(0);
list.push(1);
list.push(2);
assert(list._array.length === 2);
assert.deepStrictEqual(list._array, [ 1, 2 ]);

 list.push(0, 1, 2, 3, 4);
assert(list._array.length === 2);
assert.deepStrictEqual(list._array, [ 3, 4 ]);

list.unshift(2);
list.unshift(4);
list.unshift(5);
assert(list._array.length === 2);
assert.deepStrictEqual(list._array, [ 5, 4 ]);

list.concat([ 1, 2, 3, 4, 4, 5, 6, 7, 8 ]);
assert(list._array.length === 2);
assert.deepStrictEqual(list._array, [ 7, 8 ])
```
# push(item[,...])

remove elements from init to maintain the length of array.

# unshift(item)

remove elements from end to maintain the length of array.

# pull()
alias to pop

# concat(array1[,array2, array3...])
concar the array to current list

# from(array)
build the list from array given

# set(index, item)

set the value fo list in index with item given

# getList

return the native array
# get(index)

get the item in index given

# map(cb)
# filter(cb)
alias to native one
# forEach(cb)
alias to native one
# pop()
alias to native one 
# shift()
alias to native one
# slice(number, number)
alias to native one
# toString()
alias to native one
# sort(cb)
alias to native one
# join(string)
alias to native one
# find(cb)
alias to native one
# findIndex(cb)
alias to native one
# indexOf(object)
alias to native one
# lastIndexOf(object)
alias to native one
# reduce(cb, object)
alias to native one
# reduceRight(cb, object)
alias to native one
# reverse()
alias to native one
# valueOf()
alias to native one



